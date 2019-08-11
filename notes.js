const fs = require('fs');
const chalk = require('chalk');
const log = console.log;


const addNotes = function(title,body){
    const notes = loadNotes(); 

    const duplicatenotes = notes.filter(function(note){
        return note.title === title
    });

    if(duplicatenotes.length === 0){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        log(chalk.bgGreen.bold('notes added successfully...'));
    } else {
        log(chalk.bgRed.bold('Already Exists....'));
    }
}

const saveNotes = function(notes){
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);
}


const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json');
        const notesJSON = databuffer.toString();
        return JSON.parse(notesJSON);
    }
    catch(e){
        return [];
    }
}

module.exports = {
    addNote: addNotes
}