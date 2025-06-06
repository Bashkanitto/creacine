import { db } from '@/firebase/client'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

export async function addServices(data: { title: string; description: string }) {
  const docRef = await addDoc(collection(db, 'services'), data)
  return docRef.id
}

export async function getServices() {
  const querySnapshot = await getDocs(collection(db, 'services'))
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function updateService(id: string, data: { title?: string; description?: string }) {
  const docRef = doc(db, 'services', id)
  await updateDoc(docRef, data)
}

export async function deleteService(id: string) {
  const docRef = doc(db, 'services', id)
  await deleteDoc(docRef)
}
