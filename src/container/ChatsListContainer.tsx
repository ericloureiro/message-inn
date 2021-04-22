import { Text, StyleSheet, ScrollView, View } from 'react-native'
import { Avatar, Divider, FAB, List, ProgressBar } from 'react-native-paper'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChats } from '../redux/modules/communication/actions'
import {
  getChatsSelector,
  getIsLoadingChats,
} from '../redux/modules/communication/selectors'
import { Chat } from '../models/chat'
import FABComponent from '../components/FABComponent'
import { Colors } from '../utils/colors'

const ChatsListContainer = () => {
  const dispatch = useDispatch()
  const chats = useSelector(getChatsSelector)
  const isLoading = useSelector(getIsLoadingChats)

  useEffect(() => {
    dispatch(getChats())
  }, [dispatch])

  const handlePress = (chat: Chat) => {}

  if (isLoading) return <ProgressBar />

  return (
    <View>
      <ScrollView>
        {chats.map((chat, index) => {
          const { id, person } = chat.communication

          return (
            <View key={id}>
              {index !== 0 && <Divider />}
              <List.Item
                style={styles.item}
                title={`${person.first_name} ${person.last_name}`}
                description={chat.last_message}
                descriptionStyle={styles.description}
                descriptionNumberOfLines={1}
                left={() => (
                  <Avatar.Image
                    style={styles.avatar}
                    source={{ uri: person.avatar }}
                  />
                )}
                right={() => (
                  <Text style={styles.date}>{chat.formatDate()}</Text>
                )}
                onPress={() => handlePress(chat)}
              />
            </View>
          )
        })}
      </ScrollView>
      <FABComponent icon="message" onPress={() => console.log('FAB pressed')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: Colors.white,
  },
  description: { paddingVertical: 5 },
  avatar: { margin: 5 },
  date: {
    alignSelf: 'center',
  },
})

export default ChatsListContainer
