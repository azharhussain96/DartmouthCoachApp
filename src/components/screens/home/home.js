import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ImageBackground, Text, View } from 'react-native'

import styles from './styles'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  render() {
    // console.log(this.prop.booking)
    if (this.props.booking.departureTime !== null && this.props.booking.departTime !== '' && this.props.booking.departTime !== undefined) {
      return (
        <ImageBackground
          style={{
            flex: 1,
            width: null,
            height: null,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
          source={require('../../../../assets/fallBackground.png')}
          resizeMode="stretch"
          blurRadius={5}
        >
          <View style={styles.header}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.trip}>1 Upcoming Trips</Text>
          </View>
          <View style={styles.body} />
          <View style={styles.drawer}>
            <Button onPress={() => { this.props.navigation.navigate('From') }} title="Book Trip" />
            <Button onPress={() => { this.props.navigation.navigate('Retrieve') }} title="Find Booking" />
            <Button onPress={() => { this.props.navigation.navigate('Timing') }} title="Bus Schedule" />
          </View>
        </ImageBackground>
      )
    }
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: null,
          height: null,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
        source={require('../../../../assets/fallBackground.png')}
        resizeMode="stretch"
        blurRadius={5}
      >
        <View style={styles.header}>
          <Text style={styles.name}>Azhar Hussain</Text>
          <Text style={styles.trip}>0 Upcoming Trips</Text>
        </View>
        <View style={styles.body} />
        <View style={styles.drawer}>
          <Button onPress={() => { this.props.navigation.navigate('From') }} title="Book Trip" />
          <Button onPress={() => { this.props.navigation.navigate('Retrieve') }} title="Find Booking" />
          <Button onPress={() => { this.props.navigation.navigate('Timing') }} title="Bus Schedule" />
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => (
  {
    booking: state.booking,
  }
)

export default connect(mapStateToProps, null)(Home)
