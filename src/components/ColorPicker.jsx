import React from 'react';
import styled from 'styled-components';


const Color = styled.span`
    background:${props => props.color};
    display: inline-block;
    width: 1em;
    height: 1em;
`




class ColorPicker extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
      }
      this.colors = ['purple', '#64a8ff', '#ffc000', '#00F3A5', '#2FB4AE'];
  }
  toggleOpen = () => this.setState({isOpen: !this.state.isOpen});
  colorSelected = (color) => {
      this.props.onColorSelect(color);
      this.toggleOpen();

  }
  render() {

      if (!this.state.isOpen) {
          return <span onClick={this.toggleOpen }>{this.props.children}</span>;
      } else {
          return (
            <span
              className='colorSelector'
              style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.7)',
                background: '#fffe',
                top: 0,
                left: 0,
              }}
            >
              {this.colors.map(color => (
                <Color
                  key={color}
                  color={color}
                  onClick={() => this.colorSelected(color)}
                ></Color>
              ))}
            </span>
          );

      }
  }
}
export default ColorPicker;
