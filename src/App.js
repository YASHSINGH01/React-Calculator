import { toNumber } from 'lodash';
import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,StatusBar, Platform,Dimensions } from 'react-native';


export default function App() {
  const [title, setTitle] = useState(false);
  const [result, setResult] = useState('');
  

 

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#4B5EFC',
    light2: '#F7F7F7',
  };

  const calculate = (title) => {
  
    switch (title) 
    {
      case 'C':
        setResult('')
        setTitle('')
        break;
      case '=':
        // console.log('t',result);
        const ans = Number(eval(result).toFixed(3));
        // console.log('t',result);
      
        // console.log('tt',parseFloat(ans));
         setTitle(ans);
        break;
      case 'DEL':
        var h=result.substring(0, result.length - 1)
        setResult(h);
          setTitle("");
         break;
      default:
         setResult(result + title);
         console.log('t',result + title);
    }
  

  
  } 

  const Button = ({title}) => (
    
    <TouchableOpacity 
      onPress={() => calculate(title)}
      style={{
        height: 70,
        width: 70,
        borderRadius: 40,
      }}
      >
      <Text  style={{
          fontSize: 37,
          textAlign: 'center',
          textAlignVertical: 'center',
          
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

 
  return (
    <View style={styles.container} >
       <StatusBar barStyle="light-content" />
      <View style={styles.result} >
        <Text style={styles.resultText}>{result}</Text>
      </View >
    
      <View style={styles.calculation}>
      <Text style={styles.calculationText}>{title}</Text>
    </View>
      <View style={styles.buttons} >
        <View style={styles.numbers}>
          <View style={styles.row}>
          <Button title="C"    />
        <Button title="DEL"    />
        <Button title="/"    />
          </View>
          <View style={styles.row}>
          <Button title="7"  />
        <Button title="8"  />
        <Button title="9"  />
          </View>
          <View style={styles.row}>
          <Button title="4"    />
        <Button title="5"    />
        <Button title="6"    />
          </View>
          <View style={styles.row}>
          <Button title="1"    />
        <Button title="2"    />
        <Button title="3"    />
          </View>
          <View style={styles.row1}>
          <Button title="00"    />
        <Button title="0"    />
        <Button title="."    />
          </View>
        </View>
        
        <View style={styles.operations}>

        <Button title="*"    />
        <Button title="-"    />
        <Button title="+"    />
        
        <View style={styles.row2}>
        <Button  title="="    />
        
          </View>
        </View >
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    color: 'black'
  },

  calculationText: {
    fontSize: 24,
    color: 'black'
  },
  row:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row1:
  {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row2:
  {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  
  },
  result: {
    flex: 2,
   justifyContent: 'center',
alignItems:'flex-end',
    // backgroundColor: 'red'
  },
  calculation: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-end',
    // backgroundColor: 'green'
  },
  buttons:
  {
    flexGrow: Platform.OS == 'ios' ? 3 : Platform.OS == 'web' ? 3 : 4,
    flexDirection: 'row'
  },

  numbers: {
    flex: 3,
     backgroundColor: 'grey'
  },
  operations: {
    flex: 1,
     paddingTop:10,
    alignItems:'center',
    justifyContent: 'space-around',
     backgroundColor: 'orange'
  }
});



