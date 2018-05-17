import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  drawer: {
    width: '100%',
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundtrip: {
    flexDirection: 'row',
  },
})

export default styles
