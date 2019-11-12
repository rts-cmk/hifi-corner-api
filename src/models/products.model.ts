import db from "../config/data-storage"

export default db.firestore().collection("products")
