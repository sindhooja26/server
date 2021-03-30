import router from '.';
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

export const GetData = (req, res) => {
  registration.find({}, req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
var oldvalues={userName:"sindu",Password:"7894"}
var newvalues={$set: { userName: "archu", Password: "5678" } };
export const upData = (req, res) => {
  dbo.collection("logins").updateOne(oldvalues,newvalues, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


// var myquery={userName:'sindu'};
// export const DeleteData=(req,res) => {
//   dbo.sindu("logins").deleteone(myquery,(err,result)=>{
//     if(err){
//       res.send(err);
//     }else{
//       res.send(result);
//     }
//   })
// }
// export const DeleteData=('/deletename/:username',(req,res)=>{
//   var db=new req.db;
//   var username=req.params.username;
//   var collection=db.get('logins');
//   collection.remove({"userName":sindu},(err,result)=>{
//     res.send((result===1)?{msg:'deleted'}:{msg:'error:'+err})
//   })
// })






