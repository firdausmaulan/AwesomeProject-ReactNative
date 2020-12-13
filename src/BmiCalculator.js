import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';

const BmiCalculator = ({ navigation, props }) => {

  const [varUserHeight, onUserHeightChanges] = React.useState('');
  const [varUserWeight, onUserWeightChanges] = React.useState('');
  const [varIdeal, onIdealChanges] = React.useState('');
  const [varResult, onResultChanges] = React.useState('');
  const calculateResult = (height, weight) => {
        var ideal = height - (height * 0.1);
        onIdealChanges(ideal.toString());
        if (weight > (ideal + 5)) {
            onResultChanges('Above Ideal')
        } else if (weight < (ideal - 5)) {
            onResultChanges('Below Ideal')
        } else {
            onResultChanges('Ideal')
        }
  }

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Your Height (cm)</Text>
           <TextInput
            style={styles.textInputStyle}
            keyboardType = "numeric"
            placeholder="Your Height (cm)"
            onChangeText={varUserHeight => onUserHeightChanges(varUserHeight)}
            value={varUserHeight}
          />
          <Text>Your Weight (kg)</Text>
          <TextInput
            style={styles.textInputStyle}
            keyboardType = "numeric"
            placeholder="Your Weight (kg)"
            onChangeText={varUserWeight => onUserWeightChanges(varUserWeight)}
            value={varUserWeight}
          />
          <Text>Ideal Weight (kg)</Text>
          <TextInput
            style={styles.textInputStyle}
            editable={false}
            placeholder="Ideal Weight (kg)"
            onChangeText={varIdeal => onIdealChanges(varIdeal)}
            value={varIdeal}
          />
          <Text>Result / Status</Text>
          <TextInput
            style={styles.textInputStyle}
            editable={false}
            placeholder="Result / Status"
            onChangeText={varResult => onResultChanges(varResult)}
            value={varResult}
          />
          <View style={styles.verticalMargin}>
            <Button
              title="Calculate"
              color="black"
              onPress={() => calculateResult(parseInt(varUserHeight) - 100, parseInt(varUserWeight)) }
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
    backgroundColor: "black",
  },
  verticalMargin: {
    marginVertical: 16,
  },
  textInputStyle:{
    height: 40,
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  }
});

export default BmiCalculator;