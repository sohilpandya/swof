import React from 'react';

const ListOfEngineers = ({engineers}) => {

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
    <div className="fl w-100 vh-25 secondary">
      <div className="flex justify-around flex-wrap h-100 b">
        {getEngineerNames()}
      </div>
    </div>
  );
}

export default ListOfEngineers;