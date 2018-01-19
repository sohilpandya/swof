const express = require('express');
const router = express.Router();
const { saveEngineers } = require('../db/engineers');
const generateShiftData = require('../utils/generateShiftData');

router.post('/',(req, res) => {

  const state = req.body;
  // run calculations and create new state then save engineers and return new state
  const generatedData = generateShiftData(state);
  let workingDay = state.workingDay;
  const newWorkingDayNumber = workingDay === 10 ? 1 : ++workingDay;

  const combinedState = {
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