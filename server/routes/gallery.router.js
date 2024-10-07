const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT /gallery/like/:id
router.put('/likes/:id', (req, res) => {
  let listId = req.params.id;
  //let likesCount = req.body.likes
  const queryText = `UPDATE gallery SET likes = likes + 1 WHERE id=$1 ;`;
  

  // code here
  pool
    .query(queryText, [listId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("Error making PUT query", err);
      res.sendStatus(500);
    }); 
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery`;
  pool
    .query(sqlText)
    .then((result) => {
      
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});


module.exports = router;
