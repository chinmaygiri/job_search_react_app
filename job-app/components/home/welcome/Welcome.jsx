import { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image} from 'react-native';
import { useRouter } from 'expo-router';


import styles from './welcome.style'
import { icons, SIZES,  } from '../../../constants';  

const jobTypes = ["Full Time", "Part Time", "Internship", "Freelance", "Temporary", "Remote", 
"Volunteer", "Contract", "Commission", "Apprenticeship", "Trainee", "Fly-In/Fly-Out", "Per Diem", "Other", "Work from Home", "Work from Anywhere"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
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

      <TouchableOpacity style={styles.searchBtn} onPress={() => router.push('/search')}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
     </View>
     <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push('/search/${item}');
            }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
      />

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