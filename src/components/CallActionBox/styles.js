import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
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
    marginTop: 'auto',
  },

  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

export default styles;
