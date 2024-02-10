

import React from 'react';

function Card(props) {
const order = props.ordernumber;
console.log(order)
  return (
    <div className="HeaderContainer grid grid-cols-5 rounded-md bg-green-600 border-green-300 border m-2 border-green-300 justify-items-center">
        <div className="HeaderTopLeft col-span-1">
            <h1>Top Left</h1>
        </div>
        <div className="HeaderCenter col-span-3">
        <span><h1 className="text>-xl">Middle</h1></span>
        </div>
        <div className="HeaderTopLeft col-span-1">
        <h1>Top Right</h1>
        </div>

      </div>
  );
}

export default Card;
