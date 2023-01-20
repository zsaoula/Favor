 const mongoose = require('mongoose');

//trim pour supprimer les espaces
const postSchema = new mongoose.Schema(
    {
      postedId: {
        type: String,
        required: true
      },
      message: {
        type: String,
        maxlength: 250,
        trim: true
      },
      lien: {
        type: String,
        required: true,
        trim: true
      },
      likers: {
        type: [String],
        required: true
      },-
      tags: {
        type: [String],
        required: true
      },
      image:{
        type: String,
      },
      
      publique: {
        type: Boolean
      },
      privee: {
        type: Boolean
      },
      comments: {
        type: [
            {
                commentId: String,
                commentPseudo: String,
                text: String,
                timestamp: Number
            }
        ],
        required: true,
      }
    },
    {
      timestamps: true,
    }
  );

  const PostModel = mongoose.model("post", postSchema);

  module.exports = PostModel;