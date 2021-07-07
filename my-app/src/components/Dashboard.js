import React from 'react';

class Dashboard extends React.Component {
      constructor(props){
        super(props);
    }
    render() {    
    return (
        <div>
            <button data-testid='strike-button' onClick={this.props.strikeClick} >Strike</button> {/*Each button is receiving the functions from Apps.js*/}
            <button onClick={this.props.ballClick}>Ball</button>
            <button onClick={this.props.foulClick}>Foul</button>
            <button onClick={this.props.hitClick}>Hit</button>
        </div>
    )
  }
}
export default Dashboard;