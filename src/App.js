import React from 'react';
import Tabs from "./components/tabs";
import Inheritance from "./components/inheritance";
import Composition from "./components/composition";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="title">React Composition and Inheritance Demo</h1>
      <Tabs>
        <div label="Inheritance">
          <Inheritance/>
        </div>
        <div label="Composition">
          <Composition/>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
