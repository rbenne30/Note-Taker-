const storage = require("../db/storage");

const router = require("express").Router();

router.get("/notes", (req, res) => {
    storage
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err))
});
router.post("/notes", (req, res) => {
    storage.addNote(req.body)
    .then((newNote) =>{
        res.json(newNote)
    })
    
});
router.delete('/note/:id', (req, res) => {
    const id = req.params.id
    res.json({ id: id })
})

module.exports = router;