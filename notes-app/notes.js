const fs = require('fs');
const chalk = require('chalk');


// To grab notes
const getNotes = () => {
    return 'Your Notes...'
}

// To add notes
const addNote = function(title,body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        console.log(chalk.blue("New note added!"));
        // PUSH object properties
        notes.push({
            title: title,
            body: body
    })
    saveNotes(notes);
    } else {
        console.log(chalk.red("Note title was taken!"));
    }
}

// To save notes

const saveNotes = function(notes) {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// To remove notes

const removeNote = function(title) {
    const notes = loadNotes();
    const deleteNote = notes.filter(function(note) {
        return note.title === title
    })
    if (deleteNote.length > 0) {
        console.log('deleting note!');
        console.log(deleteNote);
    }
    saveNotes(deleteNote);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    } catch (e) {
        return [];
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote
}