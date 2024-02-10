
import React from 'react';
import Card from './card'
import Header from './header'


function App() {
  return (
<div>
  <div className="App m-4 p-2">
    <Header/>
    <div className="AppContainer grid grid-cols-10 bg-blue-800">       
     {Array.from({ length: 701 }, (_, index) => (
          <Card key={index} ordernumber={index} />
        ))}
    </div>
  </div>
</div>
  );
}

export default App;
