import React, { Component } from 'react';
import update from 'immutability-helper';
import Clock from './Clock';

import getDay from '../utils/getDay';
import getAvailableEngineers from '../utils/getAvailableEngineers';
import initialState from '../data';
import { log } from 'util';
import firebase from '../firebase';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = initialState;
  }

  render() {

    const data = firebase.database().ref('state').once('value')
      .then((snap) => {
        console.log(snap.val());
        return snap.val()
      })
      // , function (snap) {
      //   console.log(snap.val())
      // });

      console.log(this.state);

    return (
      <div className="vh-100 bg-primary">
        <div className="fl w-100 vh-25">
          <p className="tc f1 b secondary mb0">Wheel Of Fate</p>
          <Clock />
        </div>

        <div className="fl w-100 vh-50 secondary">
          {
            this.state.TodaysEngineers.length === 0 &&
            <div>
              <div className="w-50 tc bg-secondary-50 primary pa2 b pointer m-auto br3 dim"
                    onClick={() => { this.generateShift() }}>
                      Generate Shift
                      <div className="f7"> please click here to generate the shifts for today </div>
              </div>
            </div>
          }
          <div className="fl w-50 vh-50 tc">
            {
              this.state.TodaysEngineers.length > 0 &&
              <div>
                { new Date().getHours() <= 13 && new Date().getHours >= 8 ?
                  <div className="loading"></div> : <div className="empty-loading"></div>
                }
                <h2> Morning Shift </h2>
                <h1> {this.state.TodaysEngineers[0].name} </h1>
              </div>
            }
          </div>
          <div className="fl w-50 vh-50 tc">
            {
              this.state.TodaysEngineers.length > 0 &&
              <div>
                { new Date().getHours() > 14 ?
                  <div className="loading"></div> : <div className="empty-loading"></div>
                }
                <h2> Afternoon Shift </h2>
                <h1> {this.state.TodaysEngineers[1].name} </h1>
              </div>
            }
          </div>
        </div>

        <div className="fl w-100 vh-25 secondary">
          <div className="flex justify-around flex-wrap h-100 b">
            {this.getEmployeeNames()}
          </div>
        </div>

      </div>
    );
  }

  componentDidMount() {
    const data = firebase.database().ref('state').once('value')
    .then((snap) => {
        // if no data in firebase then set the state as below
        if (snap) {
          console.log(snap.val());
          this.setState(snap.val(), () => { console.log('data saved from firebase')});
        }
        // else set state from firebase
        else {
          this.setState({
            ...this.state,
            day: getDay()
          }, () => { console.log('data saved from local') })
        }
      })
  }

  getEmployeeNames = () => {
    return this.state.employees.map((x,i) => {
      return (
        <div className="flex flex-column flex-grow-1 bt b--secondary items-center justify-center" key={i}>
            <div>{x.name}</div>
            <div> Shifts: {x.totalShifts}</div>
        </div>
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
    }, () => {
      console.log('state has been updated')
      firebase.database().ref('state').set(this.state)
     })

  }
}

export default App;
