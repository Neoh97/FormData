const {modelForm} = require("../models");
const jwt = require("jsonwebtoken");

// const getUsers = async (req, res) =>{
//     try{
//         // const { query:{range} } = req; 
//         const users = await modelUser.find({}); 
//         res.status(201).send(users); 
//     }catch(e){
//         res.status(404).send({error: e})
//     }
// }

// const getToken = (req, res) =>{
//     try{
//         const user= {
//             name: "josephvillalba",
//             pass: "sj9796@sj27"
//         }

//         jwt.sign({user}, "privateKey", (err, token)=>{
//             res.json({
//                 token,
//             })
//         });

//     }catch(e){
//         res.status(404).send({error: e})
//     }
// }

const uploadData = (req, res) =>{
    // try{
    //     const { body } = req; 
    //     const user = await modelForm.create(body); 
    //     res.json({data: user}); 

    // }catch(e){
    //     res.status(404).send({error: e})
    // }
    jwt.verify(req.token, "privateKey", (error, authData)=>{
        if(error){
            res.sendStatus(403);
        }else{
            modelForm.create(req.body).then(()=>{
                res.json({
                    data: "data save..."
                })
            }).catch(error => {
                res.json({
                    data: "error"
                })
            })
        }
    })

}

// const updateUser = async (req, res) =>{
//     try{
//         // const { body } = req;
//         const { body: {id, ...data} } = req; 

//         // console.log(id);
//         // console.log(data); 

//         const user = await modelUser.findByIdAndUpdate({_id:id} ,data, {
//             returnOriginal: false,
//         }); 

//         res.json({data: user}); 

//     }catch(e){
//         res.status(404).send({error: e})
//     }
// }


// const deleteUser = async (req, res) => {
//     try{
//         // const { body } = req;
//         const id = req.params.id;

//         console.log(id); 

//         const userDelete = await modelUser.findById(id)
//         await modelUser.deleteOne({_id: id}); 
//         res.json(userDelete); 

//     }catch(e){
//         res.status(404).send(e)
//     }
// }

module.exports = {
    // getToken,
    uploadData,
    // getUsers,
    // getUser,
    // updateUser,
    // deleteUser,
}