import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handleCardPress(item)}

    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
        source={{ uri: item.employer_logo}}
        sizeMode="contain"
        style={styles.logoImage}
        />

      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

    </TouchableOpacity>
  )
}

export default PopularJobCard