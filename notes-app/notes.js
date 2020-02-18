const fs = require('fs');


const getNotes = () => {
    return 'Your Notes...'
}

const addNote = function(title,body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (diplicateNotes.length === 0) {
        // PUSH object properties
        notes.push({
            title: title,
            body: body
    })

    saveNotes(notes);


    }


}

const saveNotes = function(notes) {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
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
    loadNotes: loadNotes
}