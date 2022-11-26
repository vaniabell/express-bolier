const {response, request}= require ('express');


const usersGet =(req =request, res = response ) => {
    // GET - http://localhost:3000/test
    res.status(200).json({
        msg: 'GET API - controlador'
    })

};
const usersPost = (req =request, res = response) => {
    // POST - http://localhost:3000/test
    res.status(200).json({
        msg: 'POST API - controlador'
    });

};
const usersPut =(req =request, res = response) => {
    // PUT - http://localhost:3000/test/10
    const { id } = req.params;
    const body = req.body;
    console.log(req.body);
    res.status(200).json({
        msg: 'PUT API - controlador',
        id: id,
        body: body
    });

};
const usersDelete =(req =request, res = response) => {
    // DELETE - http://localhost:3000/test/10
    const { id } = req.params;
    res.status(200).json({
        msg: 'DELETE API - controlador',
        id
    });

};

module.exports ={
    usersGet,
    usersPost,
    usersPut,
    usersDelete
};