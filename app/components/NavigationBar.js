import { useState } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

import colors from "../assets/Color"

export default function NavigationBar() {

  const [selectedPage, setSelectedPage] = useState(0)

  function gotoHome() {
    setSelectedPage(0)
  }

  function gotoSearch() {
    setSelectedPage(1)
  }

  function gotoInventory() {
    setSelectedPage(2)
  }

  function gotoLogs() {
    setSelectedPage(3)
  }

  return (
    <View style={styles.container} >
      <Pressable onPress={gotoHome} style={{ alignItems: 'center', opacity: selectedPage === 0 ? 1 : 0.8 }}>
        <Image source={require("../assets/HomeIcon.png")} style={styles.navButton} />
        <Text style={styles.navText}>Beranda</Text>
      </Pressable>
      <Pressable onPress={gotoSearch} style={{ alignItems: 'center', opacity: selectedPage === 1 ? 1 : 0.8 }}>
        <Image source={require("../assets/SearchIcon_Light.png")} style={styles.navButton} />
        <Text style={styles.navText}>Pencarian</Text>
      </Pressable>
      <Pressable onPress={gotoInventory} style={{ alignItems: 'center', opacity: selectedPage === 2 ? 1 : 0.8 }}>
        <Image source={require("../assets/BoxIcon.png")} style={styles.navButton} />
        <Text style={styles.navText}>Gudang</Text>
      </Pressable>
      <Pressable onPress={gotoLogs} style={{ alignItems: 'center', opacity: selectedPage === 3 ? 1 : 0.8 }}>
        <Image source={require("../assets/LogsIcon.png")} style={styles.navButton} />
        <Text style={styles.navText}>Log</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    width: '80%'
  },

  navButton: {
    width: 26,
    height: 26,
    marginTop: 8,
    marginBottom: 20
  },

  navText: {
    position: 'absolute',
    color: 'white',
    fontSize: 12,
    width: 100,
    textAlign: 'center',
    marginBottom: 3,
    top: 33
  }
})