import getAvailableEngineers from '../../utils/getAvailableEngineers';
import initialState from '../../data';

test('getAvailableEngineers returns correct list of engineers from initialState', () => {
  expect(getAvailableEngineers(initialState.employees)).toEqual(initialState.employees);
});


test('getAvailableEngineers returns correct list when engineers have already worked shifts', () => {

  const employees = [
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
    { name: "Joe", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rory", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Mavis", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "June", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Dan", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rose", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Cleo", lastWorked: null, workingToday: false, totalShifts: 0 },
  ]
  expect(getAvailableEngineers(employees)).toEqual(results);
});