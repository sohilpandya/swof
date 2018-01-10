import React, { Component } from 'react';
import Header from './Header';
import TodaysShifts from './TodaysShifts';
import ListOfEngineers from './ListOfEngineers';

import getDay from '../utils/getDay';
import generateShiftData from '../utils/generateShiftData';

import initialState from '../db/data'; //initial state can be found here
import { getEngineers, saveEngineers } from '../db/getEngineers';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  render() {
    return (
      <div className="vh-100 bg-primary">
        <Header title="Wheel of Fate" />
        <button
          onClick={() => { this.generateShift() }}>
          Click Me
        </button>
        <TodaysShifts
          showListOfEngineers={this.state.showListOfEngineers}
          generateShift={this.generateShift}
          todaysEngineers={this.state.todaysEngineers} />
        <ListOfEngineers
          engineers={this.state.engineers} />
      </div>
    );
  }

  componentDidMount() {

    getEngineers // potential of refactoring this?
      .then((liveState) => {  // set data from firebase if it exists
      if(liveState.showListOfEngineers && liveState.day !== getDay()) {
        let resetEngineers = liveState.engineers.map((engineer) => {
          engineer.workingToday = false;
          return engineer;
        })
        this.setState({
          ...liveState,
          day: getDay(),
          showListOfEngineers: false,
          engineers: resetEngineers,
          yesterdaysEngineers: liveState.todaysEngineers
        })
      } else {
        this.setState(
          liveState,
          () => {
            saveEngineers(this.state);
          }
        );
      }
    })
    .catch((error) => {  // set it from local data if nothing exists on firebase
      this.setState({
        ...this.state,
        day: getDay()
      }, () => {
        saveEngineers(this.state);
      })
    });
  }

  generateShift = () => {

    const generatedData = generateShiftData(this.state);
    let workingDay = this.state.workingDay;
    const newWorkingDayNumber = workingDay === 10 ? 1 : ++workingDay;

    this.setState({
      ...this.state,
      todaysEngineers: generatedData.newTodaysEngineers,
      yesterdaysEngineers: this.state.todaysEngineers,
      engineers: generatedData.newEngineerState,
      todaysDate: generatedData.todaysDate, // set todays date
      yesterdaysDate: this.state.todaysDate, // set todays date to yesterday,
      showListOfEngineers: true,
      workingDay: newWorkingDayNumber
    }, () => {
      saveEngineers(this.state)
     })
  }
}

export default App;
