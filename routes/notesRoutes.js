const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, response) => {
            if (err) {
                throw (err);
            } else {
                const allNotes = JSON.parse(response);
                res.json(allNotes);
            }
        })
    });

    app.post('/api/notes', (req, res) => {
        const newNote = {
            ...req.body, "id": uuidv4()
        };
        console.log(newNote);
        fs.readFile('./db/db.json', 'utf8', (err, response) => {
            if (err) {
                throw (err);
            } else {
                let existingNotes = JSON.parse(response);
                console.log("all notes are existing notes", existingNotes);
                existingNotes = [...existingNotes, newNote];
                console.log('combined new and old', existingNotes)
                fs.writeFile('./db/db.json', JSON.stringify(existingNotes), (err, response) => {
                    if (err) {
                        throw (err);
                    } else {
                        console.log('new note created successfully!', newNote);
                        res.json(existingNotes);
                    }

                });

            }

        })
    });


    app.delete('/api/notes/:id', (req, res) => {
        console.log(req.params.id)
        fs.readFile('./db/db.json', 'utf8', (err, response) => {
            if (err) {
                throw (err);
            } else {
                const allNotes = JSON.parse(response);
                const updatedNotes = allNotes.filter(note => note.id != req.params.id);
                // allNotes.filter(note => {
                //     note.id != req.params.id
                // });
                fs.writeFile('./db/db.json', JSON.stringify(updatedNotes), (err, response) => {
                    if (err) {
                        throw (err);
                    } else {
                        console.log('note deleted successfully!', req.params.id);
                        res.json(updatedNotes);
                    }

                });
            }
        })
    });
}