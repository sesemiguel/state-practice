import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "Miguel Karlo Sese",
      age: 24

    }
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </>
    )
  }
}

export default App;
