import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  homeContent: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  }, 
  containerSalle: {
    marginTop: 20,
    width: "95%",
    height: 200,
    marginBottom: 15,
  },
  salleImg: {
    flex: 1,
    width: null,
    height: null, 
    resizeMode: "contain"
  },
  categories: {
    flexDirection: "row",
    marginTop: 5,
  },
  categorie: {
    width: 100,
    height: 100,
    backgroundColor: "#d3d2d2",
    marginLeft: 10,
    marginRight: 5,
  },
  promoGradient: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
  promotionCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cardProduct: {
    width: "40%",
    height: 300,
    borderColor: "#a5a5a5",
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white"

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

export default styles
