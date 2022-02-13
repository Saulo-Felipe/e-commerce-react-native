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
    backgroundColor: "black",
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 10
  },
  categorieImg: {
    width: 100, 
    height: 100
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
})

export default styles
