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

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) {
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

// module.exports.compteUpdate = async (req,res)=>{

//    const{email, password}=req.body

//   try{
//     await UserModel.findOneAndUpdate{
//       {_id: req.params.id}
//       {set:{
//         email: req.body.email
//       }}
//     }
//   }

// }




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

module.exports.unfollow = async (req, res) => {
  console.log(req.body.idToUnFollow);
  if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToUnFollow)) {
    return res.status(400).send("Invalid user ID: " + req.params.id);
  }

  try {
    await UserModel.findOneAndUpdate({ _id: req.params.id }, { $pull: { following: req.body.idToUnFollow } }, { new: true });
    await UserModel.findOneAndUpdate({ _id: req.body.idToUnFollow }, { $pull: { followers: req.params.id } }, { new: true });
    res.send({ message: 'unfollow successfull' });
  } catch (err) {
    return res.status(400).send(err);
  }
}
