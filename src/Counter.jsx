import React, { Component } from 'react';

import styled , {css}from 'styled-components';
import './Counter.scss'


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  ${ props => props.count > 10 ? 'border-color:red;':''}


  /* The GitHub button is a primary button
   * edit this to target it specifically! */


    & :hover {
        color: black;
    }
    & .num {
        color: #222;
    }
`;



class Counter extends Component {
  constructor(props) {
    super(props); // Requerido!!
    this.state = { count: 0 };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {


    const textStyle = {

            fontSize: this.state.count + 0.2 + 'em'

    };


    return (
      <div className='Counter' onClick={() => this.increment()}>
        <Button primary style={textStyle} count={this.state.count}>
            count =
          <span className='num'>{this.state.count}</span>
        </Button>
      </div>
    );
  }
}
export default Counter;
