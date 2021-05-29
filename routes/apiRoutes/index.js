const path = require('path');
const router = require('express').Router();
const data = require('../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 }= require('uuid');

// should read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    fs.readFile('../../db/db.json', function(err, data){
      console.log(data);
    });
    // store in a variable .then 
    res.json(data);
});

// should receive a new note to save on the request body and add it to the db.json file
// should return the new note to the client 
router.post('/notes', (req, res) => {
  console.log(data);
  req.body.id = uuidv4();

  var newNotes = data;
  console.log(newNotes);
  newNotes.notes.push(req.body);

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'), 
    JSON.stringify(newNotes, null, 2)
  );
  
  res.json(newNotes);
 
});

// delete request should receive a query parameter containing the id of the note to delete
// in order to delete a note, you should read all notes from the db.json file
// remove the note with teh given id and rewrite the notes to the db.json file
router.delete('/api/notes/:id', (req, res) => {

});


module.exports = router;