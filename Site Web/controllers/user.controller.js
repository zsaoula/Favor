const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

//-password pour ne pas donner le password
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.getNotif = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

//req.params par url
module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  console.log('userinfo:',req.params.id)

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      console.log('doc:',docs)
      res.send(docs);
    }
    else
      console.log("ID unknown : " + err);
  }).select("-password");
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.follow = async (req, res) => {
  if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true }
    );

    const userToFollow = await UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      { $addToSet: { followers: req.params.id } },
      { new: true, upsert: true }
    );

    res.send({ user, userToFollow });
  } catch (err) {
    return res.status(400).send(err);
  }
};


// module.exports.follow = async (req, res) => {
//   if (
//     !ObjectID.isValid(req.params.id) ||
//     !ObjectID.isValid(req.body.idToFollow)
//   )
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     // add to the follower list
//      await UserModel.findByIdAndUpdate(
//       req.params.id,
//       { $addToSet: { following: req.body.idToFollow }, },
//       { new: true , upsert: true },
//       (err, docs) => {
//         if (!err) return res.send(docs);
//           else return res.status(200).send(err);
//       }
//     )
//       // ajouter à la liste des followers
//       await UserModel.findByIdAndUpdate(
//         req.body.idToFollow,
//         { $addToSet: { followers: req.params.id }, },
//         { new: true , upsert: true},
//         (err, docs) => {
//           if (!err) return res.send(docs);
//           else return res.status(200).send(err);
//         }
//       );
//   } catch (err) {
//     return res.status(400).send(err);
//   }
// };

module.exports.unfollow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToUnfollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await userModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnfollow ,} },
      { new: true , upsert: true },
      (err, docs) => {
        if (err) return res.status(400).send(err);
      }
    );

      // Retirer de la liste des followers
      await userModel.findByIdAndUpdate(
        req.body.idToUnfollow,
        { $pull: { followers: req.params.id } },
        { new: true , upsert: true},
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(400).send(err);
        }
      );
  } catch (err) {
      return res.status(401).send(err);
  }
}
