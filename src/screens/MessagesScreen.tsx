/* eslint-disable import/namespace */
import { StyleSheet } from 'react-native';
import Chat from '../components/Chat';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const  MessagesScreen =() =>  <Chat/>

export default MessagesScreen