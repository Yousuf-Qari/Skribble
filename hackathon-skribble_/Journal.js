import { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
/*
const placeholderValues = [
    'What do you enjoy doing most?',
    'What is your proudest accomplishment so far?',
    'What is something that makes you happy?',
    'Who is your best friend and why do you like spending time with them?',
  ];
*/
const placeholderValues_happy = [
    'What do you love doing?',
    'What is your proudest accomplishment so far?',
    'Who is someone that makes you happy?'
];

const placeholderValues_ok = [
    'Rate your day on a scale of 1 to 10?',
    'What are you proud of today?',
    'What\'s your favorite book or movie to watch?',
    'What\'s something you like to do with a friend?',
];

const placeholderValues_sad = [
    'If you could go anywhere in the world, where would you go?',
    'What\'s your favorite food?',
    'What makes you feel a bit better about today?'
];


var randomChoice = placeholderValues_ok[Math.floor(Math.random() * placeholderValues_ok.length)];
const Journal = ({ navigation }) => {
  const [journalText, setJournalText] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const handleButtonPress = () => {
  navigation.navigate('Complete');
};

  const closePopup = () => {
    setShowPopup(false);
  };

  const sadButton = () => {
    setShowPopup(false);
    randomChoice = placeholderValues_sad[Math.floor(Math.random() * placeholderValues_sad.length)];
  };

  const okButton = () => {
    setShowPopup(false);
    randomChoice = placeholderValues_ok[Math.floor(Math.random() * placeholderValues_ok.length)];
  };

  const happyButton = () => {
    setShowPopup(false);
    randomChoice = placeholderValues_happy[Math.floor(Math.random() * placeholderValues_happy.length)];
  };


  return (
    <View style={styles.container}>
      <Modal visible={showPopup} animationType="slide">
        <View style={styles.popup}>
          <Text style={styles.popupText}>How are you?</Text>
          <View style={styles.popupButtons}>
            <TouchableOpacity
              style={styles.popupButton}
              onPress={sadButton}>
              <Text style={styles.popupButtonText}>☹️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupButton} onPress={okButton}>
              <Text style={styles.popupButtonText}>😐</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupButton} onPress={happyButton}>
              <Text style={styles.popupButtonText}>😁</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.prompt}>{randomChoice}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Start writing your journal entry..."
        multiline={true}
        value={journalText}
        onChangeText={(text) => setJournalText(text)}
        editable={!showPopup}
      />
      <Text style={styles.prompt}>{randomChoice}</Text>

      <TouchableOpacity
          style={styles.finishButton}
          onPress={handleButtonPress}>
          <Text style={styles.buttonTitle}>End Note</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  finishButton: {
    padding: 20,
    fontSize: 24,
    marginTop: -490,
    backgroundColor: '#007aff',
    borderRadius: 50,
    fontFamily: 'Chalkboard SE',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    fontSize: 24,
    fontFamily: 'Chalkboard SE',
    height: '100%',
  },
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupText: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 20,
  },
  popupButtons: {
    flexDirection: 'row',
  },
  popupButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007aff',
    borderRadius: 50,
  },
  popupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  prompt: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'flex-start'
  },
});

export default Journal;