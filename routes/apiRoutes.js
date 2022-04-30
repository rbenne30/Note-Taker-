const storage = require("../db/storage");

const router = require("express").Router();

router.get("/notes", (req, res)=>{
storage
    .getNotes()
    .then((notes)=> {
        return res.json(notes);
    })
    .catch((err)=> res.status(500).json(err))
});
router.post("/notes", (req, res)=>{
    res.json({
        message: 'Note created!'
    });
});
router.delete('/note/:id',(req, res) => {
     const id  = req.params.id
     res.json({id:id})   
})

module.exports = router;