import { useState } from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import Header from '../../components/header/Header'
import styles from './style.js'
import styleClasses from '../../components/styles/styleClasses'
import {LinearGradient} from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'


export default function Home() {
  const [isScroll, setIsScroll] = useState(false)


  function scroll(event) {
    let Y = event.nativeEvent.contentOffset.y;

    if (Y > 120 && !isScroll) {
      console.log("Ativando pesquisa")
      setIsScroll(true)
    } else if (Y <= 120 && isScroll) {
      console.log("Desativando pesquisa")
      setIsScroll(false)
    }

  }

  return (
    <View style={ styles.homeContainer }>
      <Header isScroll={isScroll}/>

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
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
                <View style={styles.categorie}></View>
            </ScrollView>
          </View>

        </View>

        <LinearGradient colors={['#ededed', '#f1f1f1', '#ffffff']} style={styles.promoGradient}>
          <View style={{paddingLeft: 20}}>
            <Text style={styleClasses.mediumTitle}>Promoções do dia</Text>
          </View>
            
          <View style={styles.promotionCards}>

            <View style={styles.cardProduct}>
              <View style={styles.cardImgBox}>
                <Image 
                  source={require("../../images/6af08c4efaf920804f9cbcf92199c1cf.jpg")}
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardName}>Relogio digital ultra QUALIDADE</Text>
                <Text style={styles.cardPrice}>R$ 59.90</Text>
                <View style={styles.Rating}>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                </View>
              </View>
            </View>

            <View style={styles.cardProduct}>
              <View style={styles.cardImgBox}>
                <Image 
                  source={require("../../images/notebook-lenovo-ideapad-s145-15iwl-81s90005br-prata-intel-core-i5-8265u-ram-8gb-hd-1tb-tela-156-windows-10.jpg")}
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardName}>Relogio digital ultra QUALIDADE</Text>
                <Text style={styles.cardPrice}>R$ 59.90</Text>
                <View style={styles.Rating}>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                </View>
              </View>
            </View>

            <View style={styles.cardProduct}>
              <View style={styles.cardImgBox}>
                <Image 
                  source={require("../../images/ArquivoExibir.jpeg")}
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardName}>Relogio digital ultra QUALIDADE</Text>
                <Text style={styles.cardPrice}>R$ 59.90</Text>
                <View style={styles.Rating}>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                </View>
              </View>
            </View>


            <View style={styles.cardProduct}>
              <View style={styles.cardImgBox}>
                <Image 
                  source={require("../../images/smartphone-samguns-galaxy-s21-fe-128gb-ram-6gb-5g-camera-tripla-violeta-sm-g990elvrzto_1641416373_original.jpg")}
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardName}>Relogio digital ultra QUALIDADE</Text>
                <Text style={styles.cardPrice}>R$ 59.90</Text>
                <View style={styles.Rating}>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                  <FontAwesome name="star" size={12} color="gold" style={styles.star}/>
                </View>
              </View>
            </View>

          </View>
        </LinearGradient>

      </ScrollView>
    </View>
  )
}
