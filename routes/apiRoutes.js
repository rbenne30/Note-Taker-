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

});

module.exports = router;