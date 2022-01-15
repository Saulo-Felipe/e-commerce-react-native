import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoImage: {
    height: "100%",
    flex: 1,
    // borderWidth: 1,
    borderColor: "red"
  },
  startHeader: {
    // borderWidth: 1,
    width: "20%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  centerHeader: {
    height: 50,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
  },
  endHeader: {
    // borderWidth: 1,
    width: "10%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    // borderWidth: 1,
    borderColor: "#dfdfdf",
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#eeeeee",
  }
})

export default styles