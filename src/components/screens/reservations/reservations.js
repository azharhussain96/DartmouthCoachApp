import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import QRCode from 'react-native-qrcode'

// import styles from './styles'

class Reservations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: 'general',
      clicked: false,
    }
  }

  render() {
    if (this.props.booking.returnDate === null) {
      return (
        <View>
          <View>
            <Text>Azhar Hussain</Text>
            <Text>Confirmation Code #323124</Text>
            <Text>From: {this.props.booking.departure}</Text>
            <Text>To: {this.props.booking.destination}</Text>
            <Text>Date: {this.props.booking.departDate.toString()}</Text>
            <Text>Departure Time: {this.props.booking.departTime}</Text>
          </View>
          <View>
            <QRCode
              value={this.props.booking.departure}
              size={200}
              bgColor="green"
              fgColor="white"
            />
          </View>
        </View>
      )
    }

    return (
      <View>
        <View>
          <Text>Confirmation Code #323124</Text>
          <Text>From: {this.props.booking.departure}</Text>
          <Text>To: {this.props.booking.destination}</Text>
          <Text>Departure Date: {this.props.booking.departDate.toString()}</Text>
          <Text>Departure Time: {this.props.booking.departTime}</Text>
          <Text>Return Date: {this.props.booking.returnDate.toString()}</Text>
          <Text>Return Time: {this.props.booking.returnTime}</Text>
        </View>
        <View>
          <QRCode
            value={this.props.booking.departure}
            size={200}
            bgColor="green"
            fgColor="white"
          />
        </View>
      </View>
    )
  }
}


const mapStateToProps = state => (
  {
    booking: state.booking,
  }
)


export default connect(mapStateToProps, null)(Reservations)
