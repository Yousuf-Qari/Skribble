import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#967bb6',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 50,
  },
  profileContainer: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 10,
  },
  iconContainer: {
    width: 350,
    padding: 10,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    marginTop: 25,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#313639',
    fontSize: 43,
    textAlign: 'center',
    marginTop: -70,
    marginBottom: 375
  },
  button: {
    backgroundColor: '#00b0ff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: -380,
    marginBottom: 50
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
  },
  xpContainer: {
    width: '75%',
    height: 10,
    backgroundColor: 'black',
    borderRadius: 30,
    position: 'relative',
    marginTop: 20,
  },
  xpFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  xpTextContainer: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xpText: {
    fontWeight: 'bold',
    color: '#313639',
    fontSize: 20,
    marginLeft: 150,
    marginTop: -30,
  },
  levelText: {
    fontWeight: 'bold',
    color: '#313639',
    fontSize: 20,
    marginLeft: 160,
    marginBottom: -30,
    marginTop: 10,
  },
  streakContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakText: {
    color: '#313639',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 350,
    marginTop: -70
  },
});

export default styles;