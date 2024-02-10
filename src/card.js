
import React from 'react';

function Card(props) {
const order = props.ordernumber;
console.log(order)
  return (
    <div className="AppCard col-span-1 rounded-md bg-green-600 border-green-300 border m-2 border-green-300">
        {props.ordernumber}
      </div>
  );
}

export default Card;
