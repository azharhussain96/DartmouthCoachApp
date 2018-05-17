import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import { Table, Row, Rows } from 'react-native-table-component'


import { updateDate } from '../../../redux/reducers/actions'
import styles from './styles'

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      nycSouth: ['LEAVES LEBANON, NH', 'LEAVES HANOVER, NH / DARTMOUTH COLLEGE', 'ARRIVES NEW YORK CITY'],
      nycSouthTimes: [
        ['6:15AM', '6:30AM', '11:30AM'],
        ['9:15AM', '9:30AM', '2:45PM'],
        ['2:15PM', '2:30PM', '7:30PM'],
        ['3:15PM', '3:30PM', '8:30PM'],
      ],
      nycNorth: ['LEAVES NEW YORK CITY', 'ARRIVES HANOVER, NH / DARTMOUTH COLLEGE', 'ARRIVES LEBANON, NH'],
      nycNorthTimes: [
        ['8:30AM', '1:15PM', '1:30PM'],
        ['10:30AM', '3:15PM', '3:30PM'],
        ['1:30PM', '6:20PM', '6:35PM'],
        ['4:30PM', '9:15PM', '9:30PM'],
      ],
      bostonSouth: ['LEAVES HANOVER, NH / DARTMOUTH COLLEGE', 'LEAVES LEBANON, NH',
        'LEAVES NEW LONDON, NH', 'ARRIVES BOSTON SOUTH STATION', 'ARRIVES BOSTON LOGAN INTERNATIONAL AIRPORT'],
      bostonSouthTimes: [
        ['5:00AM', '5:20AM', '5:50AM', '7:50AM', '8:05AM'],
        ['7:00AM', '7:20AM', '7:50AM', '9:35AM', '9:50AM'],
        ['9:00AM', '9:20AM', '9:50AM', '11:35AM', '11:50AM'],
        ['11:00AM', '11:20AM', '11:50AM', '1:35PM', '1:50PM'],
        ['12:00PM', '12:20PM', '12:50PM', '2:35PM', '2:50PM'],
        ['1:00PM', '1:20PM', '1:50PM', '3:35PM', '3:50PM'],
        ['2:00PM', '2:20PM', '-', '4:35PM', '4:50PM'],
        ['3:00PM', '3:20PM', '3:50PM', '5:35PM', '5:50PM'],
        ['5:00PM', '5:20PM', '5:50PM', '7:35PM', '7:50PM'],
      ],
    }
  }


  render() {
    const radio_props = [
      { label: 'Upper Valley <=> Boston', value: 0 },
      { label: 'Upper Valley <=> NYC', value: 1 },
    ]

    let viewSchedule = null
    if (this.state.value === 1) {
      viewSchedule = (
        <View>
          <View>
            <Text> Upper Valley / NYC Southbound </Text>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row data={this.state.nycSouth} style={styles.head} textStyle={styles.text} />
              <Rows data={this.state.nycSouthTimes} textStyle={styles.text} />
            </Table>
          </View>
          <View>
            <Text> Upper Valley / NYC Southbound </Text>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row data={this.state.nycNorth} style={styles.head} textStyle={styles.text} />
              <Rows data={this.state.nycNorthTimes} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      )
    } else {
      viewSchedule = (
        <View>
          <View>
            <Text> Upper Valley / Boston Southbound </Text>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row data={this.state.bostonSouth} style={styles.head} textStyle={styles.text} />
              <Rows data={this.state.bostonSouthTimes} textStyle={styles.text} />
            </Table>
          </View>
          <View>
            <Text> Upper Valley / Boston Northbound </Text>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row data={this.state.bostonSouth} style={styles.head} textStyle={styles.text} />
              <Rows data={this.state.bostonSouthTimes} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      )
    }

    return (
      <View>
        <RadioForm
          formHorizontal
          radio_props={radio_props}
          initial={0}
          onPress={(value) => { this.setState({ value }) }}
        />
        {viewSchedule}
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
