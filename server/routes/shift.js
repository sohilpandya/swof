var express = require('express');
var router = express.Router();
var { saveEngineers } = require('../db/engineers');
var generateShiftData = require('../utils/generateShiftData');

router.post('/', function (req, res) {
  var state = req.body;
  // run calculations and create new state then save engineers and return new state
  var generatedData = generateShiftData(state);
  var workingDay = state.workingDay;
  var newWorkingDayNumber = workingDay === 10 ? 1 : ++workingDay;

  var combinedState = {
    ...state,
    todaysEngineers: generatedData.newTodaysEngineers,
    yesterdaysEngineers: state.todaysEngineers,
    engineers: generatedData.newEngineerState,
    todaysDate: generatedData.todaysDate, // set todays date
    yesterdaysDate: state.todaysDate, // set todays date to yesterday,
    showListOfEngineers: true,
    workingDay: newWorkingDayNumber,
    buttonClicked: true
  }

  saveEngineers(combinedState)
    .then(() => {
      res.json(combinedState)
    })
    .catch((error) => {
      res.json({ error: error });
    });

})

module.exports = router;