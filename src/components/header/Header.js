import { TextInput, View, Text, Image } from 'react-native'
import styles from './style'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'


export default function Header({ isScroll }) {

  return (
    <View style={styles.headerContainer}>

      <View style={styles.startHeader}>
        <FontAwesome5 name={"bell"} size={20} />
        <FontAwesome5 name={"heart"} size={20} />
      </View>

      <View style={styles.centerHeader}>
        {
          isScroll 
          ? 
          <View style={styles.searchContainer}>
            <FontAwesome5 style={{marginRight: 5,}} color="gray" name={"search"} size={15}  />
            <TextInput 
              style={styles.searchInput}
              placeholder='Bolsas, botas, carros...'
            />
          </View>
          :
          <>
            <Image 
              source={require("../../images/logo.png")}
              resizeMode="contain"
              style={styles.logoImage}
            />
            <FontAwesome5 name={"search"} size={20} /> 
          </>
        }
      </View>

      <View style={styles.endHeader}>
        <FontAwesome5 name={"shopping-cart"} size={20} />
      </View>
    </View>
  )
}
