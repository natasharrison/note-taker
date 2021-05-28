const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');
// require fs


// should read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    res.json(notes);
});

// should receive a new note to save on the request body and add it to the db.json file
// should return the new note to the client 
router.post('/notes', (req, res) => {

  notes.push(req.body);
  var newNotes = notes;

  // use fs.writeFile in order to write to the db json its new data

  res.json(newNotes);
 
});

// delete request should receive a query parameter containing the id of the note to delete
// in order to delete a note, you should read all notes from the db.json file
// remove the note with teh given id and rewrite the notes to the db.json file
router.delete('/api/notes/:id', (req, res) => {

});


module.exports = router;