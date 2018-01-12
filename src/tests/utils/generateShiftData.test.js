import generateShiftData from '../../utils/generateShiftData';
import initialState from '../../db/data';

test('generateShiftData returns correct list of engineers from initialState', () => {
  let shiftData = generateShiftData(initialState);

  expect(shiftData.newEngineerState.length).toEqual(10)
  expect(shiftData.newTodaysEngineers.length).toEqual(2)
  expect(shiftData.todaysDate).toEqual(new Date().getDate())

});
