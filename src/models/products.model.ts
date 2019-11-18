import firebase from "../config/firebase"
import "firebase/firestore"

export default firebase.firestore().collection("products")
