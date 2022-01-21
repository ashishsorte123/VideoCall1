import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 100,
  },

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

  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

export default styles;
