import React from 'react';
import styled from 'styled-components';

const Color = styled.span`
  background: ${props => props.color};
  display: inline-block;
  width: 1em;
  height: 1em;
`;
const Popup = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10vw);
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background: #000a;
  font-size: 10vw;
`;

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.colors = [
      // '#685369',
      // '#64a8ff',
      // '#FFCF56',
      // 'rgba(255, 254, 255, 1)',
      // 'rgba(255, 1, 251, 1)',
      // 'rgba(2, 169, 234, 1)',
      // 'rgba(250, 255, 0, 1)',
      // '#3AB795',
      // 'rgba(0, 3, 0, 1)',
      '#333',
      '#564256',
      '#3185FC',
      'rgba(255, 94, 91, 1)',
      'rgba(255, 237, 102, 1)',
      'rgba(0, 206, 203, 1)',
      'rgba(255, 255, 234, 1)',
    ];
  }
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  colorSelected = color => {
    this.props.onColorSelect(color);
    this.toggleOpen();
  };
  render() {
    if (!this.state.isOpen) {
      return <span onClick={this.toggleOpen}>{this.props.children}</span>;
    } else {
      return (
        <Popup>
          {this.colors.map(color => (
            <Color
              key={color}
              color={color}
              onClick={() => this.colorSelected(color)}
            ></Color>
          ))}
        </Popup>
      );
    }
  }
}
export default ColorPicker;
