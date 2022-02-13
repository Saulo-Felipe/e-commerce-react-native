import { useState } from 'react'
import { View, ScrollView, Image, Text, ImageBackground } from 'react-native'
import Header from '../../components/header/Header'
import styles from './style.js'
import {styleClasses} from '../../components/styles/styleClasses'
import {LinearGradient} from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'
import Card from '../../components/card/Card'


export default function Home({navigation}) {
  const [isScroll, setIsScroll] = useState(false)

  function scroll(event) {
    let Y = event.nativeEvent.contentOffset.y;

    if (Y > 120 && !isScroll) {
      setIsScroll(true)
    } else if (Y <= 120 && isScroll) {
      setIsScroll(false)
    }

  }

  return (
    <View style={ styles.homeContainer }>
      <Header isScroll={isScroll} navigation={navigation}/>

      <ScrollView vertical={true} showsVerticalScrollIndicator={false} onScroll={(event) => scroll(event)}>
        <View style={styles.homeContent}>
          <View style={ styles.containerSalle }>
            <Image 
              source={require("../../images/promo-01.gif")}
              style={styles.salleImg}
            />
          </View>
          
          <View style={styleClasses.titleBox}>
            <Text style={styleClasses.smallTitle}>Categorias Populares</Text>
          </View>
          
          <View style={styles.categories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.categorie, { marginLeft: 0 }}></View>
                <View style={styles.categorie}>
                  <ImageBackground source={require("../../images/categories/1.png")} style={styles.categorieImg} resizeMode="contain"/>
                </View>
                <View style={styles.categorie}>
                  <ImageBackground source={require("../../images/categories/2.png")} style={styles.categorieImg} resizeMode="contain"/>
                </View>
                <View style={styles.categorie}>
                  <ImageBackground source={require("../../images/categories/3.png")} style={styles.categorieImg} resizeMode="contain"/>
                </View>
                <View style={styles.categorie}>
                  <ImageBackground source={require("../../images/categories/4.gif")} style={styles.categorieImg} resizeMode="contain"/>
                </View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
            </ScrollView>
          </View>

        </View>

        <LinearGradient colors={['black', '#02005ccc', '#02005ccc']} style={styles.promoGradient}>
          <View style={{paddingLeft: 20}}>
            <Text style={styleClasses.mediumTitle}>Promoções do dia</Text>
          </View>
            
          <View style={styles.promotionCards}>

            <Card name="Notebook 4GB de RAM" price={59.99} image={"notebook.jpg"} />
            <Card name="Notebook 4GB de RAM" price={59.99} image={"notebook.jpg"} />
            <Card name="Notebook 4GB de RAM" price={59.99} image={"notebook.jpg"} />
            <Card name="Notebook 4GB de RAM" price={59.99} image={"notebook.jpg"} />

          </View>
        </LinearGradient>

      </ScrollView>
    </View>
  )
}
