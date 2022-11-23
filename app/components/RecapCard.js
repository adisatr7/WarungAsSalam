import { useState } from "react"
import { StyleSheet, useWindowDimensions, View, Text } from "react-native"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"

import global from "./GlobalVariables"


const firstRoute = () => (
  <View>
    <Text>Tab 1</Text>
  </View>
)

const secondRoute = () => (
  <View>
    <Text>Tab 2</Text>
  </View>
)

const thirdRoute = () => (
  <View>
    <Text>Tab 3</Text>
  </View>
)

const fourthRoute = () => (
  <View>
    <Text>Tab 4</Text>
  </View>
)

const renderScene = SceneMap({
  first: firstRoute,
  second: secondRoute,
  third: thirdRoute,
  fourth: fourthRoute
})

export default function RecapTab() {

  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {title: "Hari ini", key: "first"},
    {title: "Minggu ini", key: "second"},
    {title: "Bulan ini", key: "third"},
    {title: "12 Bulan", key: "fourth"},
  ])

  const customTabBar = props => (
    <TabBar
      {...props}
      indicatorContainerStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: 'black' }}
      renderLabel={({ route, focused, color }) => (
        
        <Text style={styles.tabText}>
          {route.title}
        </Text>
      )}
    />
  )

  return (
    <View style={{ width: '100%', height: 135, alignItems: 'center' }}>
      <TabView
      style={styles.container}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      swipeEnabled={false}
      renderTabBar={customTabBar}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    bottom: 30,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: global.shadowOpacity,
    shadowOffset: { width: 1, height: 1 }
  },

  tabText: {
    fontSize: 12,
    textAlign: 'center'
  }
})