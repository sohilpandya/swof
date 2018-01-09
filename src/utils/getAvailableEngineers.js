import getDay from './getDay';

const getAvailableEngineers = (newEmployeesState) => {
  return newEmployeesState.filter((employee) => {
    return employee.workingToday === false && employee.totalShifts < 2 && employee.lastWorked !== getDay()
  })
}

export default getAvailableEngineers;