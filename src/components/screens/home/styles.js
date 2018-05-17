import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundtrip: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    width: '90%',
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    opacity: 0.6,
  },
  body: {
    flex: 3,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  trip: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
})

export default styles
