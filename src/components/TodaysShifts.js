import React from 'react';


const TodaysShifts = ({showListOfEngineers, generateShift, todaysEngineers, yesterdaysEngineers, buttonClicked, buttonClickedState}) => {
  console.log(buttonClickedState)
  return (
    <div className="vh-60">
      <div className="flex vh-50 secondary">
        {
          !showListOfEngineers &&
          <div className="w-100 flex justify-center items-center" >
            <div className="w-50 tc bg-secondary-50 primary pa2 b pointer m-auto br3 dim"
              onClick={() => { generateShift(); setTimeout(() => { buttonClicked() }, 1000) }}>
              Generate Today's Shift
                        <div className="f7"> please click here to generate the shifts for today </div>
            </div>
          </div>
        }
        {
          showListOfEngineers &&
          <div className="flex flex-column w-100">
            <div>
              <p className="tc f2 b ma0"> Today's shifts </p>
            </div>
            <div className="flex w-100">
              <div className={`${buttonClickedState ? 'morning-shift' : ''} w-50 vh-50 tc flex  justify-center items-center`}>
                <div>
                  {(new Date().getHours() <= 13 && new Date().getHours() >= 8) ?
                    <div className="loading"></div> : <div className="empty-loading"></div>
                  }
                  <p className="f3 b"> Morning </p>
                  <p className="f3"> {todaysEngineers[0].name} </p>
                </div>
              </div>
              <div className={`${buttonClickedState ? 'afternoon-shift' : ''} w-50 vh-50 tc flex  justify-center items-center`}>
                <div>
                  {new Date().getHours() > 14 ?
                    <div className="loading"></div> : <div className="empty-loading"></div>
                  }
                  <p className="f3 b"> Afternoon </p>
                  <p className="f3"> {todaysEngineers[1].name} </p>
                </div>
              </div>
            </div>
          </div>
          }
      </div>
      {
      yesterdaysEngineers.length > 1 &&
      <div className="vh10 secondary flex flex-column">
        <div>
          <p className="tc f4 b ma0"> Yesterday's shifts </p>
        </div>
        <div className="flex">
          <div className="w-50 tr pr3">
            <p className="b mt2 pr2 br"> Morning </p>
            <p className="mr2"> {yesterdaysEngineers[0].name} </p>
          </div>
          <div className="w-50 tl pl3">
            <p className="b mt2 pl2 bl"> Afternoon </p>
            <p className="ml2"> {yesterdaysEngineers[1].name} </p>
          </div>
        </div>
      </div>
        }
    </div>
  )
}

export default TodaysShifts;