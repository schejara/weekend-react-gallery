const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
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
