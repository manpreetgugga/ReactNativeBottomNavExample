import React from 'react'
import {Text,View} from "react-native";

export default class CheckoutScreen extends React.Component {

  render(){
    const titleText = "Checkout Screen";
    return (<View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text> {titleText} </Text>
               </View>)
  }
}
