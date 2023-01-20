const postModel = require("../models/post.model");
const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
//verifier que le param passé existe dans notre bdd
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");

const addNotification = require('./notifFonction');



module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

module.exports.createPost = async (req, res) => {
  const newPost = new postModel({
    postedId: req.body.postedId,
    message: req.body.message,
    lien: req.body.lien,
    likers: [],
    tags: req.body.tags,
    image: req.body.image,
    publique: req.body.publique,
    privee: req.body.privee,
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updatePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};


module.exports.likePost = async (req, res) => {
  //notif
  const idUser = await PostModel.findOne({ _id: ObjectID( req.params.id) });
  console.log("like",idUser);
  addNotification.addNotification(idUser.postedId, {
    typeNotif: "like",
    id_user: req.body.id,
    id_post1: req.params.id,
    id_post2: "null"
  });



  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true },
      (err, docs) => {
        if (err) return res.status(200).send(err);
      }
    );
    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(200).send(err);
      }
    );
    } catch (err) {
        return res.status(200).send(err);
    }
};

module.exports.unlikePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown: " + req.params.id);
  }

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true }
    );
    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true }
    );
    res.send({ message: "Post unliked" });
  } catch (err) {
    return res.status(400).send(err);
  }
};

// module.exports.unlikePost = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await PostModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $pull: { likers: req.body.id },
//       },
//       { new: true },
//       (err, docs) => {
//         if (err) return res.status(400).send(err);
//       }
//     );
//     await UserModel.findByIdAndUpdate(
//       req.body.id,
//       {
//         $pull: { likes: req.params.id },
//       },
//       { new: true },
//       (err, docs) => {
//         if (!err) return res.send(docs);
//         else return res.status(400).send(err);
//       }
//     );
//     } catch (err) {
//         return res.status(400).send(err);
//     }
// };

module.exports.commentPost = async (req, res) => {
  const idUser = await PostModel.findOne({ _id: ObjectID( req.params.id) });

  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commentId: req.body.commenterId,
            commentPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true })
            .then((data) => {
              addNotification.addNotification(idUser.postedId, {
                typeNotif: "commente",
                id_user: req.body.commenterId,
                id_post1: req.params.id,
                id_post2: data.comments.slice(-1)[0]._id
              });
              res.send(data);})
            .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
        return res.status(400).send(err);
    }
};

module.exports.editCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return PostModel.findById(req.params.id, (err, docs) => {
      const theComment = docs.comments.find((comment) =>
        comment._id.equals(req.body.commentId)
      );

      if (!theComment) return res.status(404).send("Comment not found");
      theComment.text = req.body.text;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.deleteCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true })
            .then((data) => res.send(data))
            .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
        return res.status(400).send(err);
    }
};
