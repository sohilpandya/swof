import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });
  }
  render() {
    return (
      <div className="f2 secondary tc pa2">
        {this.state.time}
      </div>
    );
  }
}

export default Clock;