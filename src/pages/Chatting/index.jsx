import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';

export default function Chatting() {
  return (
    <View>
      <Header title="Nairobi Putri Hayza" />
      <Text>Senin, 21 Maret, 2023</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({});