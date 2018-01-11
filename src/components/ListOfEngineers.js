import React from 'react';

const ListOfEngineers = ({engineers, generateShift, buttonClicked}) => {

  const getEngineerNames = () => {
    return engineers.map((x, i) => {
      return (
        <div className="flex flex-column flex-grow-1 bt b--secondary items-center justify-center" key={i}>
          <div>{x.name}</div>
          <div> Shifts: {x.totalShifts}</div>
        </div>
      )
    })
  }

  return (
    <div className="w-100 vh-25 secondary">
      <div className="dn flex-ns justify-around-ns flex-wrap-ns h-50-ns b">
        {getEngineerNames()}
      </div>
      <div className="tc">
        <p> Want to try and get through the whole 10 days of shifts without waiting 10 actual days! Click below to see it in action 😀</p>
        <div className="w-50 tc bg-secondary-50 primary pa2 b pointer m-auto br3 dim"
          onClick={() => { generateShift(); setTimeout(() => { buttonClicked() }, 1000) }}>
          Generate Next Shift
        </div>
      </div>
    </div>
  );
}

export default ListOfEngineers;