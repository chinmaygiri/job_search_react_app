import { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';


import styles from './welcome.style'
import { icons, SIZES,  } from '../../../constants';  

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Chinmay</Text>
        <Text style={styles.welcomeMessage}>Find your Dream job</Text>
      </View>
    

    <View style={styles.searchContainer}>
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        value=""
        onChange={() => {}}
        placeholder="What are you looking for?"
      />
      </View>  
     </View>
    </View>
  )
}

/**
 * Renders a welcome message for the user.
 *
 * @returns {JSX.Element} The rendered welcome message.
 */
export default Welcome