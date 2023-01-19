const mongoose = require('mongoose');

//pour vérifier la validité d'une adresse mail
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const NotifSchema = new mongoose.Schema({
    typeNotif: {
        type: String,
        required: true
    },
    id_user: {
        type: String,
        required: true
    },
    id_post1: {
        type: String,
        required: true
    },
    id_post2: {
        type: String,
        required: true
    }
});

const PictureSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  }
});


//trim pour supprimer les espaces
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },
    picture: {
      type: PictureSchema,
      default:   { data: "data:image/png;base64,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", contentType: "image/png" }
    },
    bio :{
      type: String,
      max: 1024,
    },
    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    },
    notif: [NotifSchema]
  },
  {
    timestamps: true,
  }
);

//timestamps pour savoir quand l'utilisateur c'est connecté

// play function before save into display: 'block',
userSchema.pre("save", async function(next) {
 
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function({email, password}) {
  const user = await this.findOne( {email} );
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email')
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
