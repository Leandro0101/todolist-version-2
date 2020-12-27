import appFirebase, { user } from './authentication'
const database = appFirebase.database()
const dbRefUsers = database.ref('users')
export const dbFirestore = appFirebase.firestore().collection('users')

export async function create(data) {
  await dbFirestore.doc(user().uid).collection('tasks').add(data)
}

export async function findAll() {
  const { docs } = await dbFirestore.doc(user().uid).collection('tasks').get()
  console.log(docs[0].data().title)
  // .then((snapshot) => {
  //   snapshot.forEach((doc) => {
  //     console.log(doc.data().description)
  //   })
  // })
  // .catch((err) => {
  //   console.log('Error getting documents', err)
  // })

}

export default dbRefUsers