const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require("./notes");

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
    handler: function(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log(chalk.red('Removing a note!'))
    }
})

// Create list command

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        console.log(chalk.yellow('Listing out all notes!'))
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log(chalk.blue('Reading a note!'))
    }
})

// Add, remove, read, list

yargs.parse();
