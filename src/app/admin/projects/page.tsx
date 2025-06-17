'use client'

import { useState, useEffect } from 'react'
import Modal from '@/components/Modal'
import Skeleton from '@/components/Skeleton'
import { CustomTable } from '@/components/Table'

type Project = {
  id: string
  title: string
  description: string
  images: string
  projectLink: string
}

export default function ProjectsAdmin() {
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [images, setImages] = useState('') // imagetype here how
  const [projectLink, setProjectLink] = useState('')
  const [desc, setDesc] = useState('')
  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = async () => {
    setLoading(true)
    const res = await fetch('/api/projects')
    const json = await res.json()
    setProjects(json.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  function openModal() {
    setModalOpen(true)
  }
  function closeModal() {
    setModalOpen(false)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description: desc }),
    })
    setTitle('')
    setDesc('')
    setImages('')
    setProjectLink('')
    fetchProjects()
    closeModal()
  }

  const remove = async (id: string) => {
    await fetch('/api/projects', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchProjects()
  }

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold mb-4">Проекты</h1>
        <button className="p-4 bg-blue-500 rounded-xl text-white" onClick={openModal}>
          Добавить
        </button>
      </div>

      {modalOpen && (
        <Modal onClose={closeModal}>
          <form onSubmit={submit} className="flex flex-col gap-3 max-w-md">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название"
              className="border px-3 py-2 rounded"
              required
            />
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Описание"
              className="border px-3 py-2 rounded"
              required
            />
            <input
              value={images}
              type="file"
              onChange={(e) => setImages(e.target.value)}
              placeholder="Изображение"
              className="border px-3 py-2 rounded"
            />
            <input
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              placeholder="Ссылка на проект"
              className="border px-3 py-2 rounded"
            />
            <button
              type="submit"
              disabled={!title || !desc}
              className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
              Добавить
            </button>
          </form>
        </Modal>
      )}

      {loading ? (
        <Skeleton width="100%" height={100} />
      ) : (
        <CustomTable
          data={projects}
          columns={[
            { header: 'Название', render: (r) => r.title },
            { header: 'Описание', render: (r) => r.description },
            { header: 'Изображение', render: (r) => r.images },
            { header: 'Ссылка', render: (r) => r.projectLink },
            {
              header: 'Действие',
              render: (r) => (
                <button
                  className="bg-red-500 p-2 text-white rounded-xl "
                  onClick={() => remove(r.id)}
                >
                  Удалить
                </button>
              ),
            },
          ]}
        />
      )}
    </div>
  )
}
