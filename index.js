const yargs = require('yargs');
const notes = require('./notes');

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
        console.log(argv.title);
    }
});




yargs.parse();


