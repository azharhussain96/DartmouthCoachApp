import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Done extends Component {
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
            <Text>Confirmation Code #323124</Text>
            <Text>From: {this.props.booking.departure}</Text>
            <Text>To: {this.props.booking.destination}</Text>
            <Text>Date: {this.props.booking.departDate.toString()}</Text>
            <Text>Departure Time: {this.props.booking.departTime}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Landing') }}>
              <Text> Next </Text>
            </TouchableOpacity>
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
          <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Landing') }}>
            <Text> Next </Text>
          </TouchableOpacity>
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


export default connect(mapStateToProps, null)(Done)
