import logo from "/logo.png";

function Header({ onSearch }) {
  return (
    <header className="bg-white shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Rustikas logo" className="h-12" />
      </div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => onSearch(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full sm:w-80"
      />
    </header>
  );
}

export default Header;
