import firebase from "../config/firebase"
import "firebase/storage"

export default firebase
	.storage()
	.ref()
	.child("images")
