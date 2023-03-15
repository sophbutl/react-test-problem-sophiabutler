import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleClick = () => {
     this.setState((prevState) => ({
       clicked; !prevState.clicked,
     }));
  };

  render() {
    const buttonText = this.state.clicked ? 'thanks' : 'click me';
    
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleClick}>[buttonText]</button>
      </div>
    );
  }
}
