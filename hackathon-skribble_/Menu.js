import { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './Styles';

function Menu({ navigation }) {
const [dayStreak, setDayStreak] = useState(4);
const [currentXP, setCurrentXP] = useState(20);

const handleJournalEntryPress = () => {
setDayStreak(dayStreak + 1);
setCurrentXP(currentXP + 10);
navigation.navigate('Journal');
};

// Set current and max XP values (for testing purposes)
const levelText = 4;
const maxXP = 100;

// Calculate percentage of XP earned
var xpPercentage = (currentXP / maxXP) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.levelText}>Level {levelText}</Text>
          <View style={styles.iconContainer}>
            <Image source={{uri:"https://rlv.zcache.com/cute_cartoon_penguin_poster-r7d3de3b8ed654a518cc41b56c6dac8f0_ilb22_736.webp?rlvnet=1"}} style={styles.icon} />
            <View style={styles.xpContainer}>
              <View style={[styles.xpFill, { width: `${xpPercentage}%` }]} />
            </View>
          </View>
          <View style={styles.xpTextContainer}>
            <Text style={styles.xpText}>
              {currentXP} / {maxXP} XP
            </Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome back, Max!</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleJournalEntryPress}>
          <Text style={styles.buttonTitle}>New Skribble</Text>
        </TouchableOpacity>
        <View style={styles.streakContainer}>
          <Text style={styles.streakText}>Daily Streak: {dayStreak} 🔥</Text>
        </View>
      </View>
    </View>
  );
}

export default Menu;