import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { updateDestination } from '../../../redux/reducers/actions'
import styles from './styles'

class Departure extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: 'general',
      clicked: false,
    }
  }

  onHanoverClick = () => {
    this.setState({
      map: 'hanover',
    })
  }

  onHanoverChoiceClick = () => {
    this.props.updateDestination('Hanover')
    this.setState({
      clicked: true,
    })
    console.log(this.props.booking)
  }

  onLebClick = () => {
    this.props.updateDestination('Lebanon')
    this.setState({
      clicked: true,
    })
    console.log(this.props.booking)
  }

  onLondonClick = () => {
    this.props.updateDestination('New London')
    this.setState({
      clicked: true,
    })
    console.log(this.props.booking)
  }

  onNyClick = () => {
    this.props.updateDestination('New York')
    this.setState({
      clicked: true,
    })
    console.log(this.props.booking)
  }

  onBostonClick = () => {
    this.setState({
      map: 'boston',
    })
  }

  onLoganClick = () => {
    this.props.updateDestination('Logan')
    this.setState({
      clicked: true,
    })
    console.log(this.props.booking)
  }

  onStationClick = () => {
    this.props.updateDestination('South Station')
    this.setState({
      clicked: true,
    })
    console.log(this.props.booking)
  }

  render() {
    let NextButton = null
    if (this.state.clicked) {
      NextButton = (
        <View>
          <Text> To: {this.props.booking.destination} </Text>
          <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Details') }}>
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
      if (this.props.booking.departure === 'New York') {
        return (
          <View style={styles.container}>
            <View style={styles.map}>
              <ImageBackground
                style={styles.image}
                source={require('../../../../assets/generalMap.png')}
              >
                <TouchableOpacity style={styles.hanoverCircle} onPress={this.onHanoverClick}>
                  <Text> Hanover Upper Valley </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
            {NextButton}
          </View>
        )
      } else if (this.props.booking.departure === 'Hanover' ||
        this.props.booking.departure === 'New London' ||
        this.props.booking.departure === 'Lebanon') {
        return (
          <View style={styles.container}>
            <View style={styles.map}>
              <ImageBackground
                style={styles.image}
                source={require('../../../../assets/generalMap.png')}
              >
                <TouchableOpacity style={styles.bostonCircle} onPress={this.onBostonClick}>
                  <Text> Boston </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nyCircle} onPress={this.onNyClick}>
                  <Text> New York </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
            {NextButton}
          </View>
        )
      }
      return (
        <View style={styles.container}>
          <View style={styles.map}>
            <ImageBackground
              style={styles.image}
              source={require('../../../../assets/generalMap.png')}
            >
              <TouchableOpacity style={styles.hanoverCircle} onPress={this.onHanoverClick}>
                <Text> Hanover Upper Valley </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {NextButton}
        </View>
      )
    } else if (this.state.map === 'hanover') {
      if (this.props.booking.departure === 'New York') {
        return (
          <View style={styles.container}>
            <View style={styles.map}>
              <ImageBackground
                style={styles.image}
                source={require('../../../../assets/hanover.png')}
              >
                <TouchableOpacity
                  style={styles.hanoverBigCircle}
                  onPress={this.onHanoverChoiceClick}
                >
                  <Text> Hanover </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
            {NextButton}
          </View>
        )
      }
      return (
        <View style={styles.container}>
          <View style={styles.map}>
            <ImageBackground
              style={styles.image}
              source={require('../../../../assets/hanover.png')}
            >
              <TouchableOpacity style={styles.hanoverBigCircle} onPress={this.onHanoverChoiceClick}>
                <Text> Hanover </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.lebanonCircle} onPress={this.onLebClick}>
                <Text> Lebanon </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.londonCircle} onPress={this.onLondonClick}>
                <Text> New London </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {NextButton}
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          <ImageBackground
            style={styles.image}
            source={require('../../../../assets/boston.png')}
          >
            <TouchableOpacity style={styles.loganCircle} onPress={this.onLoganClick}>
              <Text> Logan Airport </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stationCircle} onPress={this.onStationClick}>
              <Text> South Station </Text>
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
  updateDestination,
}

export default connect(mapStateToProps, mapDispatchToProps)(Departure)
