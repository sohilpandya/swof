const getAvailableEngineers = (newEmployeesState, yesterdaysEmployees) => {
  return newEmployeesState.filter((employee) => {
    let workedYesterday = yesterdaysEmployees.filter((x) => { return x.name === employee.name })
    // if all members have served once then do the code below.
    if (newEmployeesState.every((employee) => { return employee.totalShifts >= 1})) {
      return employee.workingToday === false &&
        employee.totalShifts < 2 &&
        workedYesterday.length === 0
      }
    //otherwise return only members who have done 0 times.
    else {
      return employee.workingToday === false &&
        employee.totalShifts < 1 &&
        workedYesterday.length === 0
    }
  })
}

module.exports = getAvailableEngineers;