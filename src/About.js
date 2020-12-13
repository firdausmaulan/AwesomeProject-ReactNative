import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  Linking,
} from 'react-native';

const About = ({ navigation, props }) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              source={{
                uri: 'https://2.bp.blogspot.com/-WrDIrSd8rXE/UoWrx1lMlCI/AAAAAAAAAB4/Jrw0w4MJCsE/s1600/Kaito_Kuroba_Avatar_by_Phantom_Akiko.jpg',
              }}
            />
          </View>
          <Text style={styles.title}>
            Maulana Firdaus
          </Text>
          <View style={styles.verticalMargin}>
            <Button
              title="Github"
              color="black"
              onPress={() => Linking.openURL("https://github.com/firdausmaulan")}
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
    backgroundColor: "#000000",
  },
  title: {
    textAlign: 'center'
  },
  profilePic: {
    width: 150,
    height: 150,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  verticalMargin: {
    marginVertical: 16,
  },
});

export default About;