const UserModel = require('../models/user.model');
const fs = require("fs");
const { promisify } = require('util');
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require('../utils/errors.utils');


module.exports.uploadProfil = async (req, res) => {
  console.log(req.body.file);
  try {

    console.log(req.body.file);
      if (
          req.body.file.detectedMimeType != "image/jpg" &&
          req.body.file.detectedMimeType != "image/png" &&
          req.body.file.detectedMimeType != "image/jpeg"
      )
          throw Error("Invalid file format. Only jpg, jpeg, png formats are allowed.");

      if (req.body.file.size > 500000) throw Error("File size exceeded the maximum limit of 500KB.");
      if(req.body.file.size === 0) throw Error("Empty file");
  } catch (err) {

      console.log("File upload failed.")
      console.log(err)
      return res.status(400).json({ message: err.message });

  }
  const fileName = req.body.file.name + ".jpg";
    
    await pipeline(
      req.body.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/profil/${fileName}`
      )
    );
  
    try {
      await UserModel.findByIdAndUpdate(
        req.body.file.userId,
          { $set: { picture: "./uploads/profil/" + fileName } },
          { new: true, upsert: true, setDefaultsOnInsert: true })
          .then((data) => res.send(data))
          .catch((err) => res.status(500).send({ message: err }));
          
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  };