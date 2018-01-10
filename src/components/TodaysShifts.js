import React from 'react';


const TodaysShifts = ({showListOfEngineers, generateShift, todaysEngineers}) => {

  return (
    <div className="fl w-100 vh-50 secondary">
      {
        !showListOfEngineers &&
        <div>
          <div className="w-50 tc bg-secondary-50 primary pa2 b pointer m-auto br3 dim"
            onClick={() => { generateShift() }}>
            Generate Shift
                      <div className="f7"> please click here to generate the shifts for today </div>
          </div>
        </div>
      }
      <div className="fl w-50 vh-50 tc">
        {
          showListOfEngineers &&
          <div>
            {(new Date().getHours() <= 13 && new Date().getHours() >= 8) ?
              <div className="loading"></div> : <div className="empty-loading"></div>
            }
            <h2> Morning Shift </h2>
            <h1> {todaysEngineers[0].name} </h1>
          </div>
        }
      </div>
      <div className="fl w-50 vh-50 tc">
        {
          showListOfEngineers &&
          <div>
            {new Date().getHours() > 14 ?
              <div className="loading"></div> : <div className="empty-loading"></div>
            }
            <h2> Afternoon Shift </h2>
            <h1> {todaysEngineers[1].name} </h1>
          </div>
        }
      </div>
    </div>
  )
}

export default TodaysShifts;