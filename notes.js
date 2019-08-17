const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

// Function for Add a notes
const addNotes = function(title,body){

    // First Load Old Notes
    const notes = loadNotes(); 

    // Check old Notes with passed title for remove duplicacy
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


// Function for Save notes in notes.json file
const saveNotes = function(notes){
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);
}

// Function for list all notes
const listNotes = function(){
    const notes = loadNotes();
    notes.forEach(function(note){
        log(chalk.blue('Title : ' + note.title + ' Body :'+note.body));
    })
}

// Function for Remove a note
const removeNote = function(title){
    const notes = loadNotes();
    // Store Notes in new variable thats we do not want to delete
    const notesToKeep = notes.filter(function(note){
        return note.title!==title
    })

    if(notes.length > notesToKeep.length){
        log(chalk.bgGreen.bold('Removed successfully...'));
        saveNotes(notesToKeep);
    }else{
        log(chalk.bgRed.bold('No record found..'));
    }

}

// Function for Read a note
const readNote = function(title){
    const notes = loadNotes();

    // Find the notes with title that's user pass
    const requiredNote = notes.find(function(note){
        return note.title===title
    })
    if(requiredNote){
        log('Title : ' + chalk.blue(requiredNote.title));
        log('Body : ' + chalk.blue(requiredNote.body));
    }else{
        log(chalk.bgRed.bold('No record found..'));
    }
}


// Function for Load all notes in Json Format
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


// Export functions 
module.exports = {
    addNote: addNotes,
    listNotes:listNotes,
    removeNote:removeNote,
    readNote:readNote
}