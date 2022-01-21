import React from 'react'
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0
    }
  }

  performCalculation = (mode) => {
    switch (mode) {
      case "add":
        return this.setState({
          counterValue: this.state.counterValue + 1
        })
      case "sub":
        return this.setState({
          counterValue: this.state.counterValue - 1
        })
      case "reset":
        return this.setState({
          counterValue: 0
        })
      case "double":
        return this.setState({
          counterValue: this.state.counterValue * 2
        })
      case "half":
        return this.setState({
          counterValue: this.state.counterValue / 2
        })
      case "square":
        return this.setState({
          counterValue: this.state.counterValue * this.state.counterValue
        })
      default:
        return true
    }
  }

  render() {
    return (
      <div className="home__container">
        <h3 className='home__Heading'>Counter: {this.state.counterValue}</h3>
        <button className='home__button' onClick={() => this.performCalculation("add")}>Add</button>
        <button className='home__button' onClick={() => this.performCalculation("sub")}>Subtract</button>
        <button className='home__button' onClick={() => this.performCalculation("reset")}>Reset</button>
        <button className='home__button mt-15' onClick={() => this.performCalculation("double")}>Double</button>
        <button className='home__button mt-15' onClick={() => this.performCalculation("half")}>Half</button>
        <button className='home__button mt-15' onClick={() => this.performCalculation("square")}>Square</button>
      </div>
    );
  }
}

export default Home;
