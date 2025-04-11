import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col post-card">
      <img src={post.image_url} className="rounded-lg mb-4 h-48 object-cover" />
      <h2 className="text-xl font-semibold text-[#8B1D1D] mb-2">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-4">Por {post.author} - {post.date}</p>
      <Link
        to={`/post/${post.id}`}
        className="btn px-4 py-2 rounded text-center mt-auto w-fit"
      >
        Ver detalle
      </Link>
    </div>
  )
}

export default PostCard
