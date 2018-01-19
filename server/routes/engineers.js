const express = require('express');
const router = express.Router();
const { getEngineers, saveEngineers } = require('../db/engineers');

router.get('/',(req, res) => {
  getEngineers
    .then((liveState) => {
      res.json(liveState);
    })
    .catch((error) => {
      res.json({ error: error });
    });
  })


router.post('/',(req, res) => {
  const newState = req.body;


  saveEngineers(newState)
    .then(() => {
      res.json({ data: "engineers have been saved!" })
    })
    .catch((error) => {
      res.json({ error: error });
    });
})

module.exports = router;