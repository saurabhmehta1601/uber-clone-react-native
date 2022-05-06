import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

export const HomeScreen = () => {
  return (
    <View>
      <Text style={tw` text-red-400 text-2xl p-4`}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})