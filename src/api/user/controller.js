import registration from '../Comman/Registration';

export const AddData = (req, res) => {
   registration.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}

export const Getdata=(req,res)=>{
  registration.find({},req.body,(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
}

export const DeleteData=(req,res) => {
  registration.remove(req.body,(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  })
}






