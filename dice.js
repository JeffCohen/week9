import React from 'react';
import { Alert, StyleSheet, Switch, Image, Button, TextInput, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  rollDice = () => {
    // TO DO:
    // 1. Display an alert box
    // 2. Implement rolling the dice
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Image source={ {uri: 'https://www.jeffcohenonline.com/3.png'} } style={styles.images}/>
          <Image source={ {uri: 'https://www.jeffcohenonline.com/6.png'} } style={styles.images}/>
        </View>
        <Button onPress={this.rollDice} title="Roll The Dice" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  },
  images: {
    width: 100,
    height: 100,
    alignItems: 'center',
  }
});


// Playing cards are also availabl online.
// For example:
// https://www.jeffcohenonline.com/king_of_diamonds.png
// https://www.jeffcohenonline.com/9_of_hearts.png
