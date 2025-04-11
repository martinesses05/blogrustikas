import { useEffect, useState } from 'react'
import { getPosts } from '../services/api'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'

function Home() {
  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 9

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data)
      setFiltered(data)
    })
  }, [])

  useEffect(() => {
    const f = posts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase())
    )
    setFiltered(f)
    setPage(1)
  }, [search, posts])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <>
      <Header onSearch={setSearch} />
      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map(post => <PostCard key={post.id} post={post} />)}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </main>
    </>
  )
}

export default Home
