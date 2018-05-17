// import React from 'react';
import { createStackNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native';

// import VideoList from '../components/video_list';
// import VideoDetail from '../components/video_detail';
import Home from '../components/screens/home/home'
import Departure from '../components/screens/departure/departure'
import Destination from '../components/screens/destination/destination'
import DateTime from '../components/screens/date/date'
import Pay from '../components/screens/payment/payment'
import Done from '../components/screens/done/done'
import Reservation from '../components/screens/reservations/reservations'
import Schedule from '../components/screens/schedule/schedule'

// nest stack navigator to handle two internal views
const MainNavigator = createStackNavigator({
  // keys are the names of the "routes"
  Landing: Home,
  From: Departure,
  To: Destination,
  Details: DateTime,
  Payment: Pay,
  Confirm: Done,
  Retrieve: Reservation,
  Timing: Schedule,
})


export default MainNavigator
