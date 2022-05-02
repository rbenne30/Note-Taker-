const util = require("util");
const fs = require("fs/promises");
const uuid = require("uuid");



class Storage {

     
        
    getNotes() {
        return fs.readFile('db/db.json', "utf8").then((notes) => {
           
            try {
                return JSON.parse(notes);
            } catch (error) {
                return  [];
            }
         
        });
    }
    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error
                ("add title and text");
        }
        const newNote = { title, text, id: uuid.v1() };
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => fs.writeFile('db/db.json', JSON.stringify(updatedNotes)))
            .then(() => newNote);


    }
}
module.exports = new Storage();