import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPosts } from '../services/api'
import Header from '../components/Header'

function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    getPosts().then(data => {
      const found = data.find(p => p.id === id)
      setPost(found)
    })
  }, [id])

  if (!post) return <div className="p-6 text-center">Cargando...</div>

  return (
    <>
      <Header onSearch={() => {}} />
      <main className="px-6 py-10 max-w-5xl mx-auto">
        <Link to="/" className="text-sm text-[#C62828] underline mb-4 block">
          ← Volver al blog
        </Link>
        <img src={post.image_url} alt="" className="w-full rounded-xl shadow mb-6" />
        <h1 className="text-4xl font-bold text-[#8B1D1D] mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">Por {post.author} - {post.date}</p>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
    </>
  )
}

export default PostDetail
