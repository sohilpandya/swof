const initialState = {
  employees: [
    { name: "Sohil", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Alex", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Andrew", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Joe", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rory", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Mavis", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "June", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Dan", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Rose", lastWorked: null, workingToday: false, totalShifts: 0 },
    { name: "Cleo", lastWorked: null, workingToday: false, totalShifts: 0 },
  ],
  day: null,
  TodaysEngineers: [],
  yesterdaysEngineers: [],
  showListOfEngineers: false
}

export default initialState;