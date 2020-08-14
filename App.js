import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import Header from './src/components/header';
import Liste from './src/components/Liste';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Header headerText={'Ana Sayfa'} />
      <Liste />
    </View>
    
  );
}

