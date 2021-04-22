import React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import { Colors } from '../utils/colors'

interface FABComponentProps {
  icon: string
  onPress: () => void
}

const FABComponent = (props: FABComponentProps) => (
  <FAB style={styles.fab} icon={props.icon} onPress={props.onPress} />
)

const styles = StyleSheet.create({
  fab: {
    backgroundColor: Colors.blue,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default FABComponent
