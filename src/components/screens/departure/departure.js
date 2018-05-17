import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { updateDeparture } from '../../../redux/reducers/actions'
import styles from './styles'

class Departure extends Component {
  static navigationOptions = {
    title: 'Departure',
  };
  constructor(props) {
    super(props)
    this.state = {
      map: 'general',
      clicked: false,
    }
  }

  onHanoverClick = () => {
    // console.log('hello')
    this.setState({
      map: 'hanover',
    })
  }

  onHanoverChoiceClick = () => {
    this.props.updateDeparture('Hanover')
    this.setState({
      clicked: true,
    })
  }

  onLebClick = () => {
    this.props.updateDeparture('Lebanon')
    this.setState({
      clicked: true,
    })
  }

  onLondonClick = () => {
    this.props.updateDeparture('New London')
    this.setState({
      clicked: true,
    })
  }

  onNyClick = () => {
    this.props.updateDeparture('New York')
    this.setState({
      clicked: true,
    })
  }

  onBostonClick = () => {
    this.setState({
      map: 'boston',
    })
  }

  onLoganClick = () => {
    this.props.updateDeparture('Logan')
    this.setState({
      clicked: true,
    })
  }

  onStationClick = () => {
    this.props.updateDeparture('South Station')
    this.setState({
      clicked: true,
    })
  }

  render() {
    let NextButton = null
    if (this.state.clicked) {
      NextButton = (
        <View>
          <Text style={styles.name}> From: {this.props.booking.departure} </Text>
          <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('To') }}>
            <Text> Next </Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      NextButton =
        (<TouchableOpacity style={styles.nextInactive} >
          <Text> Next </Text>
        </TouchableOpacity>)
    }

    if (this.state.map === 'general') {
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.nav}
              source={require('../../../../assets/fromNav.png')}
            />
          </View>
          <View style={styles.map}>
            <ImageBackground
              style={styles.image}
              source={require('../../../../assets/generalMap.png')}
            >
              <TouchableOpacity style={styles.hanoverCircle} onPress={this.onHanoverClick}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> Hanover Upper Valley </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bostonCircle} onPress={this.onBostonClick}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> Boston </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nyCircle} onPress={this.onNyClick}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> New York </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {NextButton}
        </View>
      )
    } else if (this.state.map === 'hanover') {
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.nav}
              source={require('../../../../assets/fromNav.png')}
            />
          </View>
          <View style={styles.map}>
            <ImageBackground
              style={styles.image}
              source={require('../../../../assets/hanover.png')}
            >
              <TouchableOpacity style={styles.hanoverBigCircle} onPress={this.onHanoverChoiceClick}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> Hanover </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.lebanonCircle} onPress={this.onLebClick}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> Lebanon </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.londonCircle} onPress={this.onLondonClick}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> New London </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {NextButton}

        </View>

      )
    }
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.nav}
            source={require('../../../../assets/fromNav.png')}
          />
        </View>
        <View style={styles.map}>
          <ImageBackground
            style={styles.image}
            source={require('../../../../assets/boston.png')}
          >
            <TouchableOpacity style={styles.loganCircle} onPress={this.onLoganClick}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}> Logan Airport </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stationCircle} onPress={this.onStationClick}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}> South Station </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        {NextButton}
      </View>
    )
  }
}


const mapStateToProps = state => (
  {
    booking: state.booking,
  }
)

const mapDispatchToProps = {
  updateDeparture,
}

export default connect(mapStateToProps, mapDispatchToProps)(Departure)
