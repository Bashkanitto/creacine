// app/api/projects/route.ts
import { db } from '@/firebase/client'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { title, description, images, projectLink } = await req.json()
  const col = collection(db, 'projects')
  await addDoc(col, {
    title,
    description,
    images,
    projectLink,
    createdAt: new Date().toISOString(),
  })
  return NextResponse.json({ success: true }, { status: 201 })
}

export async function GET() {
  const qs = await getDocs(collection(db, 'projects'))
  const data = qs.docs.map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
  return NextResponse.json({ data }, { status: 200 })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  await deleteDoc(doc(db, 'projects', id))
  return NextResponse.json({ success: true })
}
