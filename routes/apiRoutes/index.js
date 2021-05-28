const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');


// should read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    res.json(notes);
});

// should receive a new note to save on the request body and add it to the db.json file
// should return the new note to the client 
// give each new note a unqiue id
router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  // req.body.id = notes.length.toString();

  notes.push(req.body);
  var newNotes = notes;

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'), 
    JSON.stringify({ notes}, null, 2)
  );
  
  res.json(newNotes);
 
});

// delete request should receive a query parameter containing the id of the note to delete
// in order to delete a note, you should read all notes from the db.json file
// remove the note with teh given id and rewrite the notes to the db.json file
router.delete('/api/notes/:id', (req, res) => {

});


module.exports = router;