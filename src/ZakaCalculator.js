import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';

const ZakaCalculator = ({ navigation, props }) => {

  const [varIncome, onIncomeChanges] = React.useState('');
  const [varDebt, onDebtChanges] = React.useState('');
  const [varResult, onResultChanges] = React.useState('');
  const calculateResult = (income, debt) => {
        var zakat = (income - debt) * 0.025;
        onResultChanges(zakat.toString());
  }

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
           <Text>Income</Text>
           <TextInput
            style={styles.textInputStyle}
            keyboardType = "numeric"
            placeholder="Income"
            onChangeText={varIncome => onIncomeChanges(varIncome)}
            value={varIncome}
          />
          <Text>Debt</Text>
          <TextInput
            style={styles.textInputStyle}
            keyboardType = "numeric"
            placeholder="Debt"
            onChangeText={varDebt => onDebtChanges(varDebt)}
            value={varDebt}
          />
          <Text>Result</Text>
          <TextInput
            style={styles.textInputStyle}
            editable={false}
            placeholder="Result"
            onChangeText={varResult => onResultChanges(varResult)}
            value={varResult}
          />
          <View style={styles.verticalMargin}>
            <Button
              title="Calculate"
              color="#00c853"
              onPress={() => calculateResult(parseInt(varIncome), parseInt(varDebt)) }
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
    backgroundColor: "#00c853",
  },
  title: {
    textAlign: 'center'
  },
  verticalMargin: {
    marginVertical: 16,
  },
  textInputStyle:{
    height: 40,
    marginVertical: 8,
    borderColor: '#00c853',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  }
});

export default ZakaCalculator;