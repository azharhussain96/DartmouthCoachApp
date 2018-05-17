import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import { Dropdown } from 'react-native-material-dropdown'

import { updateDate } from '../../../redux/reducers/actions'
import styles from './styles'

class Departure extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      departTime: null,
      returnTime: null,
    }
  }

  onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      })
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      })
    }
  }

  onSubmit = () => {
    this.props.updateDate(this.state.selectedStartDate,
      this.state.selectedEndDate, this.state.departTime, this.state.returnTime)
    this.props.navigation.navigate('Payment')
  }


  render() {
    const { selectedStartDate, selectedEndDate } = this.state
    const minDate = new Date() // Today
    const startDate = selectedStartDate ? selectedStartDate.toString() : ''
    const endDate = selectedEndDate ? selectedEndDate.toString() : ''
    const data = [{
      value: '8:00am',
    }, {
      value: '10:00am',
    }, {
      value: '12:00pm',
    }, {
      value: '2:00pm',
    }, {
      value: '4:00pm',
    }, {
      value: '6:00pm',
    }]

    let NextButton = null
    if (this.state.selectedStartDate !== null && this.state.departTime !== null) {
      if (this.state.selectedEndDate === null) {
        NextButton = (
          <View>
            <TouchableOpacity style={styles.next} onPress={this.onSubmit}>
              <Text> Next </Text>
            </TouchableOpacity>
          </View>
        )
      } else if (this.state.selectedEndDate !== null && this.state.returnTime !== null) {
        NextButton = (
          <View>
            <TouchableOpacity style={styles.next} onPress={this.onSubmit}>
              <Text> Next </Text>
            </TouchableOpacity>
          </View>
        )
      } else if (this.state.selectedEndDate !== null && this.state.returnTime === null) {
        NextButton = (
          <View>
            <TouchableOpacity style={styles.nextInactive} onPress={() => { this.props.navigation.navigate('To') }}>
              <Text> Next </Text>
            </TouchableOpacity>
          </View>
        )
      }
    } else {
      NextButton =
        (<TouchableOpacity style={styles.nextInactive} >
          <Text> Next </Text>
        </TouchableOpacity>)
    }


    if (this.state.selectedEndDate === null) {
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.nav}
              source={require('../../../../assets/dateNav.png')}
            />
          </View>
          <CalendarPicker
            startFromMonday
            onDateChange={this.onDateChange}
            allowRangeSelection
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#7300e6"
            selectedDayTextColor="#FFFFFF"
            minDate={minDate}
          />

          <View>
            <Text>SELECTED START DATE:{ startDate }</Text>
            <Text>SELECTED END DATE:{ endDate }</Text>
          </View>
          <Dropdown
            label="Departure Time"
            data={data}
            onChangeText={(value, index, dat) => {
              this.setState({ departTime: value })
              console.log(dat)
            }}
          />
          <View />
          <View style={{ alignItems: 'center' }}>
            {NextButton}
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.nav}
            source={require('../../../../assets/dateNav.png')}
          />
        </View>
        <CalendarPicker
          startFromMonday
          onDateChange={this.onDateChange}
          allowRangeSelection
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          minDate={minDate}
        />

        <View>
          <Text>SELECTED START DATE:{ startDate }</Text>
          <Text>SELECTED END DATE:{ endDate }</Text>
        </View>
        <Dropdown
          label="Departure Time"
          data={data}
          onChangeText={(value) => { this.setState({ departTime: value }) }}
        />
        <Dropdown
          label="Return Time"
          data={data}
          onChangeText={(value) => { this.setState({ returnTime: value }) }}
        />
        <View />
        <View style={{ alignItems: 'center' }}>
          {NextButton}
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

const mapDispatchToProps = {
  updateDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Departure)
