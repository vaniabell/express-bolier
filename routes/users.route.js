const {Router} = require ('express');
const router= Router();
const {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
} =require ('../controllers/users.controller');
 



router.get('/usuarios',usersGet);

router.post('/usuarios', usersPost);

router.put('/usuarios/:id', usersPut);

router.delete('/usuarios/:id', usersDelete);


module.exports= router;