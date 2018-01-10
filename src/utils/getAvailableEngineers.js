import getDay from './getDay';

const getAvailableEngineers = (newEmployeesState, yesterdaysEmployees) => {

  return newEmployeesState.filter((employee) => {
    let workedYesterday = yesterdaysEmployees.filter((x) => { return x.name === employee.name})
    return employee.workingToday === false &&
           employee.totalShifts < 2 &&
           employee.lastWorked !== getDay() &&
           workedYesterday.length === 0
  })
}

export default getAvailableEngineers;