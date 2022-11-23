import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

import global from "./GlobalVariables"


export default function SearchBar() {
  return(
    <View style={styles.container}>
      <Image style={{ left: 15 }} source={require("../assets/SearchIcon_Dark.png")} />
      <TextInput 
        style={styles.searchInput}
        placeholder="Cari nama barang..."
        inlineImageLeft="../assets/SearchIcon"
        clearButtonMode="while-editing"
        returnKeyType="search"
      />
      <Pressable style={styles.filterButton} >
        <Image source={require("../assets/FilterButton.png")} style={styles.filterIcon} />
        <Text style={styles.filterText}>Urutkan</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    height: 32,
    borderRadius: 50,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: global.shadowOpacity,
    shadowOffset: { height: 1, width: 1 }
  },

  searchInput: {
    left: 25,
    width: 178
  },

  filterButton: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItem: 'center',
    resizeMode: 'stretch',
    height: 24,
    left: 225
  },

  filterIcon: {
    width: 27,
    height: 24
  },

  filterText: {
    marginLeft: 8,
    marginRight: 12
  }
})