import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  next: {
    marginBottom: 100,
    width: 400,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextInactive: {
    marginBottom: 100,
    width: 400,
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
