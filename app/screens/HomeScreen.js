import React, { useState } from "react"
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"

import colors from "../assets/Color"
import global from "../components/GlobalVariables"
import NavigationBar from "../components/NavigationBar"

import RecapCard from "../components/RecapCard"
import SearchBar from "../components/SearchBar"
import TransactionCard from "../components/TransactionCard"


export default function HomeScreen() {

  const [navBarIsVisible, setNavBarVisibility] = useState(true)

  function showNavBar() {
    setNavBarVisibility = true
  }

  function hideNavBar() {
    setNavBarVisibility = false
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.staticHeaderContainer}>
        <Text style={styles.headerText}>Beranda</Text>
        <Pressable style={styles.cartButton} >
          <Image source={require("../assets/CartIcon_Colored.png")} />
        </Pressable>
      </View>

      <ScrollView bounces={false} >
        <View style={styles.dynamicHeaderContainer} >
          <Pressable style={styles.headerButtonContainer} >
            <Image source={require('../assets/BarcodeIcon.png')} />
            <Text style={styles.headerButtonText}>Scan QR</Text>
          </Pressable>
          <Pressable style={styles.headerButtonContainer} >
            <Image source={require('../assets/ReceiptIcon.png')} />
            <Text style={styles.headerButtonText}>Transaksi</Text>
          </Pressable>
          <Pressable style={styles.headerButtonContainer} >
            <Image source={require('../assets/BoxPlusIcon.png')} />
            <Text style={styles.headerButtonText}>Tambah Item</Text>
          </Pressable>
          <Pressable style={styles.headerButtonContainer} >
            <Image source={require('../assets/BoxCrossIcon.png')} />
            <Text style={styles.headerButtonText}>Stok Habis</Text>
          </Pressable>
        </View>

        <View style={styles.whiteContainer} >
          <RecapCard />

          <Text style={styles.categoryText} >Transaksi Terakhir</Text>
          <TransactionCard />
          <TransactionCard />
          <Text style={styles.showMoreText}>Tampilkan lebih banyak</Text>

          <Text style={styles.categoryText} >Katalog</Text>
          <SearchBar />
        </View>
      </ScrollView>

      <NavigationBar />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  staticHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: global.horizontalMargin
  },

  headerText: {
    fontSize: 22,
    color: 'white'
  },

  cartButton: {
    justifyContent: 'center'
  },

  dynamicHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 55,
    marginVertical: 20
  },

  headerButtonContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowOffset: { height: 1, width: 1 },
    shadowColor: 'black',
    shadowOpacity: global.shadowOpacity
  },

  headerButtonText: {
    position: "absolute",
    fontSize: 12,
    color: 'white',
    opacity: 0.85,
    textAlign: 'center',
    width: 100,
    top: 40
  },

  whiteContainer: {
    backgroundColor: colors.blankBackground,
    alignItems: 'center',
    height: 1000,
    width: '100%',
    top: 55,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  categoryText: {
    alignSelf: "flex-start",
    marginHorizontal: global.horizontalMargin,
    marginVertical: 10,
    fontSize: 18,
    color: colors.primary,
  },

  showMoreText: {
    color: 'grey',
    fontSize: 12,
    textDecorationLine: "underline"
  }
})
