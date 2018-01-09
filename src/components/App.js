import React, { Component } from 'react';
import update from 'immutability-helper';
import getDay from '../utils/getDay';
import getAvailableEngineers from '../utils/getAvailableEngineers';
import initialState from '../data';
import { log } from 'util';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = initialState;
  }

  render() {
    return (
      <div>
        <h1>Wheel Of Fate</h1>
        <h2>List of Employees</h2>
        {this.getEmployeeNames()}
        <div>
          {
            this.state.TodaysEngineers.length === 0 && <button onClick={() => { this.generateShift() }}>Wheel of Fortune</button>
          }
          {
            this.state.TodaysEngineers.length > 0 &&
            <div>
              <h2> Today's Engineers </h2>
              <div> Morning {this.state.TodaysEngineers[0].name} </div>
              <div> Afternoon {this.state.TodaysEngineers[1].name} </div>
            </div>
          }
        </div>

      </div>
    );
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      day: getDay()
    })
  }

  getEmployeeNames = () => {
    return this.state.employees.map((x,i) => {
      return (
        <li key={i}>
          {x.name}
        </li>
      )
    })
  }

  generateShift = () => {

    let newEmployeesState = this.state.employees;
    let newTodaysEngineers = [];

    for (var i = 0; i < 2; i++) {
      let availableEngineers = getAvailableEngineers(newEmployeesState);
      let rng = Math.floor(Math.random() * (availableEngineers.length))
      let engineer = availableEngineers[rng];
      let engineerIndex = newEmployeesState.findIndex((x) => x.name === engineer.name)
      let newEngineerDetails = update(engineer, {
        $set: {
          name: engineer.name,
          lastWorked: this.state.day,
          workingToday: true,
          totalShifts: engineer.totalShifts + 1
        }
      })

      newTodaysEngineers.push(newEngineerDetails);
      newEmployeesState = update(newEmployeesState, {
        $splice: [
          [engineerIndex, 1, newEngineerDetails]
        ]
      })

    }

    this.setState({
      ...this.state,
      TodaysEngineers: newTodaysEngineers,
      employees: newEmployeesState
    }, () => { console.log('state has been updated') })

  }
}

export default App;
