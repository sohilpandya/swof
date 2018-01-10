import React, { Component } from 'react';
import update from 'immutability-helper';
import Clock from './Clock';
import Header from './Header';
import TodaysShifts from './TodaysShifts';
import ListOfEngineers from './ListOfEngineers';

import getDay from '../utils/getDay';
import getAvailableEngineers from '../utils/getAvailableEngineers';
import initialState from '../data';
import firebase from '../firebase';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  render() {
    return (
      <div className="vh-100 bg-primary">
        <Header title="Wheel of Fate" />
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
    const data = firebase.database().ref('state').once('value')
    .then((snap) => {
        // if no data in firebase then set the state as below
        if (snap.val()) {
          let liveState = snap.val();
      // if showListOfEngineers is true
      // and getDay is not same as day
      // then reset showListOfEngineers

      // get all engineers and turn workingToday to false;
          if(liveState.showListOfEngineers && liveState.day !== getDay()) {
            let resetEngineers = liveState.engineers.map((engineer) => {
              engineer.workingToday = false;
              return engineer;
            })

            console.log('RESET ENGINEERS', resetEngineers);

            this.setState({
              ...snap.val(),
              day: getDay(),
              showListOfEngineers: false,
              engineers: resetEngineers
            }, () => { console.log('fired when new day')})
          } else {
            this.setState(liveState, () => { console.log('data saved from firebase'); firebase.database().ref('state').set(this.state)});
          }
        }
        // else set state from firebase
        else {
          this.setState({
            ...this.state,
            day: getDay()
          }, () => { console.log('data saved from local') })
        }
      })

      // if the day is not the same as that in the state then update the database by resetting certain parts of user data and allow user to generate new shifts
  }

  generateShift = () => {

    let newEngineerState = this.state.engineers;
    let yesterdaysEngineers = this.state.yesterdaysEngineers
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
          lastWorked: this.state.day,
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

    this.setState({
      ...this.state,
      todaysEngineers: newTodaysEngineers,
      yesterdaysEngineers: this.state.todaysEngineers,
      engineers: newEngineerState,
      todaysDate: todaysDate, // set todays date
      yesterdaysDate: this.state.todaysDate, // set todays date to yesterday,
      showListOfEngineers: true
    }, () => {
      console.log('state has been updated')
      firebase.database().ref('state').set(this.state)
     })

  }
}

export default App;
