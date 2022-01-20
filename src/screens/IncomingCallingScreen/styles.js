import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },

  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },

  bg: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 30,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: 'white',
    marginTop: 10,
  },

  iconButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  },
});

export default styles;
