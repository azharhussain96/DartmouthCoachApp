import React from 'react'
import { Button, ImageBackground, Text, View } from 'react-native'

import styles from './styles'

const Home = props => (

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
    <View>
      <Text>Azhar Hussain</Text>
      <Text>0 Upcoming Trips</Text>
    </View>
    <View style={styles.drawer}>
      <Button onPress={() => { props.navigation.navigate('From') }} title="Book Trip" />
      <Button onPress={() => { props.navigation.navigate('Retrieve') }} title="Find Booking" />
      <Button onPress={() => { props.navigation.navigate('Timing') }} title="Bus Schedule" />
    </View>
  </ImageBackground>
)

export default Home
