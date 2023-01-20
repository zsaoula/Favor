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
//router.post('/send-verification-email', authController.verifEmail);
//retirer le token (cookie)
router.get('/logout', authController.logout);
router.post('/verify-email',authController.verifyEmail);
router.post('/forgotpassword',authController.forgotPassword);
router.post('/reset/:token',authController.resetPost);
router.get('/reset/:token',authController.resetGet);
router.post('/send-verification-email',authController.sendVerificationEmail);

// user 
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);
router.patch('/notif/:id', userController.getNotif);
router.patch('/:id/image', userController.saveImage);
router.get('/:id/image',userController.getImage);
router.put('/update/email/:id',userController.compteUpdateEmail);
router.put('/update/:id',userController.compteUpdatePseudo);
router.delete('/delete/:ip', userController.deleteUser);
//upload pb avec postman
//router.post("/upload", upload.single('file'), uploadController.uploadProfil);



module.exports = router;