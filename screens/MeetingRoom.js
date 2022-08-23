import React, { useState, useEffect } from 'react' 
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import StartMeeting from '../components/StartMeeting'
import {io} from "socket.io-client"

let socket;

function MeetingRoom() {
  const [name, setName] = useState()
  const [roomId, setRoomId] = useState()

  const joinRoom = () => {
    socket.emit('join-room', { roomId: roomId, userName: name})
  }

  useEffect(()=> {
    // const API_URL = "https://d61e-2601-19c-5180-ee0-00-c9ad.ngrok.io"
    socket = io("http://localhost:3001");
    console.log("yooooo")
    socket.on('connection', ()=> console.log("connected"))
  }, [])

  return (
    <View style={styles.container}>
      {/* start meeting screen*/}
      <StartMeeting 
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex:1,
  },
})