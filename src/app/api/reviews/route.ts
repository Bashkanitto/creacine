import { db } from '@/firebase/client'
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function GET() {
  const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
  return NextResponse.json({ data })
}

export async function POST(req: Request) {
  const { author, message, role, videoLink } = await req.json()
  const col = collection(db, 'reviews')
  await addDoc(col, {
    author,
    message,
    role,
    videoLink,
    createdAt: new Date().toISOString(),
  })
  return NextResponse.json({ success: true }, { status: 201 })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  await deleteDoc(doc(db, 'reviews', id))
  return NextResponse.json({ success: true })
}
