import { StyleSheet } from 'react-native'


const styleClasses = StyleSheet.create({
  smallTitle: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },
  mediumTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "white"
  },
  titleBox: {
    justifyContent: "flex-start",
    borderColor: "red",
    width: "95%"
  },
})

const cardStyle = StyleSheet.create({
  cardProduct: {
    width: "40%",
    height: 300,
    borderColor: "#a5a5a5",
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
    borderRadius: 10, 
  },
  cardImgBox: {
    borderBottomWidth: 1,
    height: "60%"
  },
  cardImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  cardContent: {
    padding: 5,
    width: "100%",
  },
  cardName: {
    fontSize: 15,
    fontWeight: "bold"
  },
  cardPrice: {
    fontWeight: "200",
    fontSize: 20,
    fontStyle: "italic"
  },
  Rating: {
    flexDirection: "row",
    marginTop: 10,
  },
  star: {
    marginRight: 5,
  }
})

export {styleClasses, cardStyle}
