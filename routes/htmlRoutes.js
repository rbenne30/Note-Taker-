const router = require("express").Router();
const path = require("path");


router.get ("/notes",(req, res)=>{
  console.log(path.resolve(__dirname,"/public/notes.html"))
res.sendFile (path.join(__dirname,"../public/notes.html"))
})
router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); 
router.get ("/notes", (rer, res) =>{
res.send
})
//Route:get('delete-user/{id}', function ($id) {
//   App\User:destroy($id);
//   return 'User '.$id.'deleted';
// });
module.exports = router;