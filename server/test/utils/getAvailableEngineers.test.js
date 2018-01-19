const getAvailableEngineers = require('../../utils/getAvailableEngineers');
const initialState = require('../data');
const test = require('tape');

test('getAvailableEngineers returns correct list of engineers from initialState', (t) => {
  t.deepEqual(getAvailableEngineers(initialState.engineers, []), initialState.engineers);
  t.end();
});


test('getAvailableEngineers returns correct list when engineers have already worked shifts', (t) => {

  const engineers = [
    { name: "Sohil", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Alex", lastWorked: "Tuesday", workingToday: true, totalShifts: 0 },
    { name: "Andrew", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Joe", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rory", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Mavis", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "June", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Dan", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rose", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Cleo", lastWorked: null, workingToday: false, totalShifts: 0 },
  ]

  const results = [
    { name: "Sohil", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Andrew", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Mavis", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "June", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Dan", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rose", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Cleo", lastWorked: null, workingToday: false, totalShifts: 0 },
  ]

  t.deepEqual(getAvailableEngineers(engineers, [{ name: "Joe", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rory", lastWorked: null, workingToday: false, totalShifts: 0 }]), results);
  t.end();

});

test('getAvailableEngineers returns correct list when engineers have already worked shifts and others have already done two shifts', (t) => {

  const engineers = [
    { name: "Sohil", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Alex", lastWorked: "Tuesday", workingToday: true, totalShifts: 0 },
    { name: "Andrew", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Joe", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rory", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Mavis", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "June", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Dan", lastWorked: null, workingToday: false, totalShifts: 2 },
    { name: "Rose", lastWorked: null, workingToday: false, totalShifts: 2 },
    { name: "Cleo", lastWorked: null, workingToday: false, totalShifts: 2 },
  ]

  const results = [
    { name: "Sohil", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Andrew", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Mavis", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "June", lastWorked: null, workingToday: false, totalShifts: 0 },
  ]

  t.deepEqual(getAvailableEngineers(engineers, [{ name: "Joe", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rory", lastWorked: null, workingToday: false, totalShifts: 0 }]), results);
  t.end();

});


test('end the tests', (t) => {
  t.end();
  process.exit(0)
})
