import React from 'react';
// import { render } from '@testing-library/react';

class Display extends React.Component {
    constructor(props){
    super(props)
  }


    render() {
    return(
        <>
            <h1>Balls: {this.props.balls}</h1> {/* Receiving the state of balls and strikes */}
            <h1>Strikes: {this.props.strikes}</h1>
        </>
    )
 }
}

export default Display;


