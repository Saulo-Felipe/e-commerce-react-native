import { View, Text, Image } from 'react-native'
import {cardStyle} from '../styles/styleClasses'
import { FontAwesome } from '@expo/vector-icons'


export default function Card({name, price, image}) {
  var src = require("../../images/notebook.jpg")
  return (
    <View style={cardStyle.cardProduct}>
      <View style={cardStyle.cardImgBox}>
        <Image 
          source={src}
          style={cardStyle.cardImg}
        />
      </View>

      <View style={cardStyle.cardContent}>
        <Text style={cardStyle.cardName}>{name}</Text>
        <Text style={cardStyle.cardPrice}>R$ {price}</Text>
        <View style={cardStyle.Rating}>
          <FontAwesome name="star" size={12} color="gold" style={cardStyle.star}/>
          <FontAwesome name="star" size={12} color="gold" style={cardStyle.star}/>
          <FontAwesome name="star" size={12} color="gold" style={cardStyle.star}/>
          <FontAwesome name="star" size={12} color="gold" style={cardStyle.star}/>
          <FontAwesome name="star" size={12} color="gold" style={cardStyle.star}/>
        </View>
      </View>
    </View>
  )
}