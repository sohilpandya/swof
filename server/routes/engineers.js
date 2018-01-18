var express = require('express');
var router = express.Router();
var { getEngineers, saveEngineers } = require('../db/engineers');

router.get('/', function (req, res) {
  getEngineers
    .then((liveState) => {
      res.json(liveState);
    })
    .catch((error) => {
      res.json({ error: error });
    });
  })


router.post('/', function (req, res) {
  var newState = req.body;


  saveEngineers(newState)
    .then(() => {
      res.json({ data: "engineers have been saved!" })
    })
    .catch((error) => {
      res.json({ error: error });
    });
})

module.exports = router;