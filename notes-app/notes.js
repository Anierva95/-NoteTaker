const fs = require('fs');
const chalk = require('chalk');


// To grab notes
const getNotes = () => 'Your Notes...'

// To add notes
const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title)
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

const saveNotes = notes => {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// To remove notes

const removeNote = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note deleted!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('None deleted!'));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    } catch (e) {
        return [];
    }    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your List!'));
    notes.forEach(note => console.log(note.title));
}

const readNotes = title => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);
        if (foundNote) {
            console.log(chalk.green.inverse(foundNote.title));
            console.log(chalk.blue.inverse(foundNote.body));
        }
        else {
            console.log(chalk.red.inverse("Cannot find note!"));
        }
    }


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}