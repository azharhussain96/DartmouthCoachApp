import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Done extends Component {
  static navigationOptions = {
    title: 'Confirmation',
  };
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
        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.trip}>Confirmation Code #323124</Text>
          </View>
          <View>
            <Text style={styles.trip}>
              <Text style={styles.name}>From: </Text> {this.props.booking.departure}
            </Text>
            <Text style={styles.trip}>
              <Text style={styles.name}>To: </Text>{this.props.booking.destination}
            </Text>
            <Text style={styles.trip}>
              <Text style={styles.name}>Departure Date: </Text>
              {this.props.booking.departDate.toString()}
            </Text>
            <Text style={styles.trip}>
              <Text style={styles.name}>Departure Time: </Text>{this.props.booking.departTime}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Landing') }}>
              <Text> Done </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.name}>Azhar Hussain</Text>
          <Text style={styles.trip}>Confirmation Code #323124</Text>
        </View>
        <View>
          <Text style={styles.trip}>
            <Text style={styles.name}>From: </Text> {this.props.booking.departure}
          </Text>
          <Text style={styles.trip}>
            <Text style={styles.name}>To: </Text>{this.props.booking.destination}
          </Text>
          <Text style={styles.trip}>
            <Text style={styles.name}>Departure Date: </Text>
            {this.props.booking.departDate.toString()}
          </Text>
          <Text style={styles.trip}>
            <Text style={styles.name}>Departure Time: </Text>{this.props.booking.departTime}
          </Text>
          <Text style={styles.trip}>
            <Text style={styles.name}>Return Date:</Text> {this.props.booking.returnDate.toString()}
          </Text>
          <Text style={styles.trip}>
            <Text style={styles.name}>Return Time: </Text> {this.props.booking.returnTime}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Landing') }}>
            <Text> Done </Text>
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
