import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  BackHandler,
} from 'react-native';

const MainMenu = ({ navigation, props }) => {

  const exitDialog = () => {
    Alert.alert("Exit", "Are you sure want to exit?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.buttonMargin}>
            <Button
              title="Zaka Calculator"
              onPress={() => navigation.navigate("Zaka Calculator")}
            />
          </View>
          <View style={styles.buttonMargin}>
            <Button
              title="BMI Calculator"
              onPress={() => navigation.navigate("BMI Calculator")}
            />
          </View>
          <View style={styles.buttonMargin}>
            <Button
              title="Movies"
              onPress={() => console.log("Pressed")}
            />
          </View>
          <View style={styles.buttonMargin}>
            <Button
              title="About"
              onPress={() => navigation.navigate("About")}
            />
          </View>
          <View style={styles.buttonMargin}>
            <Button
              title="Exit"
              onPress={exitDialog}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  titleToolbar: {
    textAlign: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: "#0000ff",
  },
  buttonMargin: {
    marginVertical: 16,
  },
  fixToText: {
    marginVertical: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MainMenu;