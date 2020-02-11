import React from 'react';

const App: React.FC = () => {
  const sum = (a:number, b: number):string => `${a + b}`;
  return (
    <div className="App">
      <p>React typescript </p>
      { sum(10, 11)}
    </div>
  );
};

export default App;
