const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require("./notes");

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        // This creates the title property
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        // This creates a body property
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv) {
        // To call method form your own package, same syntax
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {

        // Remeber: if it is input, it is argument vector
        notes.removeNote(argv.title);
    }
})

// Create list command

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler() {
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "read notes",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
        console.log(chalk.blue('Reading a note!'));
    }
})

// Add, remove, read, list



yargs.parse();
