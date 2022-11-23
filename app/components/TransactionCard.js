import { StyleSheet, View } from "react-native"
import global from "./GlobalVariables"


export default function TransactionCard() {
  return(
    <View style={styles.container}>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: 64,
    marginBottom: 10,

    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: global.shadowOpacity,
    shadowOffset: { height: 1, width: 1 }
  }
})