
//Authorization: bearer <token> 
function verifyToken(req, res, next){
     const bearerHeaders = req.headers['authorization']; 

     if(typeof headers !== undefined){; 
        req.token = bearerHeaders; 
        next();
     }else{
        res.sendStatus(403);
     }
}

module.exports = verifyToken; 