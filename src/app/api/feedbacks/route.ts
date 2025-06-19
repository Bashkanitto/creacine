// app/api/projects/route.ts
import { db } from '@/firebase/client'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, number, emailOrTelegram, category, description, file } = await req.json()
  await addDoc(collection(db, 'feedbacks'), {
    name,
    number,
    emailOrTelegram,
    description,
    category,
    file,
    createdAt: new Date().toISOString(),
  })
  return NextResponse.json({ success: true }, { status: 201 })
}

export async function GET() {
  const qs = await getDocs(collection(db, 'feedbacks'))
  const data = qs.docs.map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
  return NextResponse.json({ data }, { status: 200 })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  await deleteDoc(doc(db, 'feedbacks', id))
  return NextResponse.json({ success: true })
}
