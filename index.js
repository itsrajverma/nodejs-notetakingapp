const yargs = require('yargs'); 
const notes = require('./notes');


// Command for add a new note
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe:'Enter the title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Enter the message',
            demandOption:true,
            type: 'string'
        }
    },
    handler:function (argv) {
        notes.addNote(argv.title,argv.body);
    }
});

// Command for remove a  note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Enter the title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title);
    }
});

// Command for read a  note
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Enter the title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNote(argv.title);
    }
});

// Command for list all notes
yargs.command({
    command:'list',
    describe:'list all notes',
    handler:function(){
        notes.listNotes();
    }
})


yargs.parse();


