const util = require("util");
const fs = require("fs");
const uuid = require("uuid");

const readData = util.promisify(fs.readFile);
const writeData = util.promisify(fs.writeFile);

class Storage{
    read(){
        return readData('db/db.json',"utf8");
    }
    write(){
        return writeData('db/db.json',JSON.stringify(note));
    }
    getNotes(){
        return this.read().then((notes)=>{
            let displayNotes;
            try {
                displayNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                displayNotes = [];
            }
            return displayNotes;
        });
    }
    addNote(note){
        const {title, text}=note;
        if (!title || !text) {
            throw new Error
            ("add title and text");
        }
        const newNote = {title, text,id: uuid.v1() };
        return this.getNotes()
        .then((notes)=> [...notes,newNote] )
        .then((updateNotes)=> this.write(updatedNotes) )
        .then(() => newNote);

        
    }
}
module.exports = new Storage();