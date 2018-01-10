import update from 'immutability-helper';
import getAvailableEngineers from './getAvailableEngineers'; // function that returns available engineers

const generateShiftData = (state) => {

  let newEngineerState = state.engineers.map((engineer) => {
    engineer.workingToday = false;
    // if everyone has reached shift of 2 then reset state for all engineers. :)
    if (state.workingDay === 10) {
      engineer.totalShifts = 0;
    }
    return engineer;
  });
  let yesterdaysEngineers = state.todaysEngineers; // today's engineers become yesterdays engineers
  let newTodaysEngineers = [];
  const todaysDate = new Date().getDate();

  for (var i = 0; i < 2; i++) {
    let availableEngineers = getAvailableEngineers(newEngineerState, yesterdaysEngineers);
    let rng = Math.floor(Math.random() * (availableEngineers.length))
    let engineer = availableEngineers[rng];
    let engineerIndex = newEngineerState.findIndex((x) => x.name === engineer.name)
    let newEngineerDetails = update(engineer, {
      $set: {
        name: engineer.name,
        lastWorked: state.day,
        workingToday: true,
        totalShifts: engineer.totalShifts + 1
      }
    })

    newTodaysEngineers.push(newEngineerDetails);
    newEngineerState = update(newEngineerState, {
      $splice: [
        [engineerIndex, 1, newEngineerDetails]
      ]
    })


  }

  return {
    newEngineerState,
    newTodaysEngineers,
    todaysDate
  }
}

export default generateShiftData;