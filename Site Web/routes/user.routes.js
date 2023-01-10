const router = require('express').Router();
const authController = require('../controllers/auth.controller.js');
const userController = require('../controllers/user.controller.js');
const uploadController = require('../controllers/upload.controller.js');
const multer = require('multer');
const upload = multer();

//auth
//controlleur d'authentification
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
//retirer le token (cookie)
router.get('/logout', authController.logout);

// user 
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
//put pour faire des updates
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);

//upload pb avec postman
router.post("/upload", upload.single('file'), uploadController.uploadProfil);

module.exports = router;