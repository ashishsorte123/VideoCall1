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
  },

  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
  },

  localVideo: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 100,
  },

  remoteVideo: {
    backgroundColor: '#7b4e80',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
  },
});

export default styles;
