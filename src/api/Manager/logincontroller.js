import login from '../common/loginmodel'
 export const Addlogin=(req,res)=>{
     login.create(req.body,(err,result)=>{
         if(err){
            res.send(err);
         }else
         res.send(result);
        
     });
 }