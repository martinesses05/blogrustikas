function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className="btn px-4 py-2 rounded">
          Anterior
        </button>
      )}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)} className="btn px-4 py-2 rounded">
          Siguiente
        </button>
      )}
    </div>
  )
}

export default Pagination
