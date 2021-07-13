import React from 'react';
import { connect } from 'react-redux';
import { retrieveRandomData } from "../redux/action-creators";

interface Props {
  retrieveRandomData: Function,
  phoneData: {
    phoneNumber: string,
    phoneNumberFormat: string
  },
  randomData: {
    account_number: string,
    bank_name: string
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
    this.props.retrieveRandomData()
  }

  render() {
    console.log("The store data is ", this.props.randomData)
    return (
      <div>
        The boolean value is  {this.state.isTrue.toString()} .
        The faker data is {this.props.randomData.account_number}
        <div>
          <button onClick={this.onButtonClick}>Click Me </button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    phoneData: state.fakerPhone,
    randomData: state.randomData
  }
}

export default connect(
  mapStateToProps,
  { retrieveRandomData }
)(FakerDataClassComponent);


