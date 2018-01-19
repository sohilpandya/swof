import React, { Component } from 'react';
import Header from './Header';
import TodaysShifts from './TodaysShifts';
import ListOfEngineers from './ListOfEngineers';

import getDay from '../utils/getDay';

import initialState from '../apiCall/data'; //initial state can be found here
import shift from '../apiCall/shift'; //initial state can be found here
import { getEngineers, saveEngineers } from '../apiCall/engineers';

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
          todaysEngineers={this.state.todaysEngineers}
          yesterdaysEngineers={this.state.yesterdaysEngineers}
          buttonClicked={this.buttonClicked}
          buttonClickedState={this.state.buttonClicked} />
        <ListOfEngineers
          engineers={this.state.engineers}
          generateShift={this.generateShift}
          buttonClicked={this.buttonClicked}
          buttonClickedState={this.state.buttonClicked} />
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
    .catch((error = "Oops Something Went Wrong!") => {  // set it from local data if nothing exists on firebase
      this.setState({
        ...this.state,
        day: getDay(),
        error: error
      }, () => {
        saveEngineers(this.state);
      })
    });
  }

  generateShift = () => {
    shift(this.state)
      .then((generatedData) => {
        this.setState({
          ...generatedData
        });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          error: error
        })
      });
  }

  buttonClicked = () => {
    this.setState({
      ...this.state,
      buttonClicked: false
    }, () => {
      saveEngineers(this.state);
    })
  }
}

export default App;
