import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'


import { updateDate } from '../../../redux/reducers/actions'
import styles from './styles'

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      name: '',
      number: '',
      exp: '',
    }
  }


  render() {
    const radio_props = [
      { label: 'Pay with Card on File - **** 2232', value: 0 },
      { label: 'Enter Credit Card', value: 1 },
    ]

    let NextButton = null
    if (this.state.value === 0) {
      NextButton = (
        <View>
          <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Confirm') }}>
            <Text> Next </Text>
          </TouchableOpacity>
        </View>
      )
    } else if (this.state.value === 1 && this.state.name !== '' && this.state.number !== '' && this.state.exp !== '') {
      NextButton = (
        <View>
          <TouchableOpacity style={styles.next} onPress={() => { this.props.navigation.navigate('Confirm') }}>
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

    let enterCredit = null
    if (this.state.value === 1) {
      enterCredit = (
        <View>
          <TextInput
            placeholder="Name on Card"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
          />
          <TextInput
            placeholder="Credit Card Number"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ number: text })}
            keyboardType={'numeric'}
            value={this.state.number}
          />
          <TextInput
            placeholder="Expiration Date: MM/YY"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ exp: text })}
            keyboardType={'numeric'}
            value={this.state.exp}
          />
        </View>
      )
    }

    return (
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => { this.setState({ value }) }}
        />
        {enterCredit}
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
  updateDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
