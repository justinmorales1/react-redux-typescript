import React from 'react';
import { connect } from 'react-redux';
import { retrieveDataAction } from "../redux/action-creators";
import FakerData from './FakerData';

interface Props {
  retrieveDataAction: Function
  phoneData: {
    phoneNumber: string,
    phoneNumberFormat: string
  }
}

interface State {
  isTrue: boolean
}

class FakerDataClassComponent extends React.Component<Props, State> {

  state = {
    isTrue: false
  }

  onButtonClick = (): void => {
    this.setState({ isTrue: !this.state.isTrue })
  }

  render() {
    console.log("The store data is ", this.props.phoneData)
    return (
      <div>
        The boolean value is  {this.state.isTrue.toString()} .
        The faker data is {this.props.phoneData.phoneNumber}
        <div>
          <button onClick={this.onButtonClick}>Click Me </button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    phoneData: state.fakerPhone
  }
}

export default connect(
  mapStateToProps,
  { retrieveDataAction }
)(FakerDataClassComponent);


