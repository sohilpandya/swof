var generateShiftData = require('../../utils/generateShiftData');
var initialState = require('../data');
var test = require('tape');

test('generateShiftData returns correct list of engineers from initialState', (t) => {
  let shiftData = generateShiftData(initialState);

  t.equal(shiftData.newEngineerState.length, 10);
  t.equal(shiftData.newTodaysEngineers.length, 2);
  t.equal(shiftData.todaysDate, new Date().getDate());
  t.end()

});
