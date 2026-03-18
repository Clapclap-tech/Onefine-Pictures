const Header = () => {
  return (
    <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">
          Welcome back, here is what's happening today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search equipment..."
          className="border px-4 py-2 rounded text-sm"
        />

        <button className="bg-primary text-white px-4 py-2 rounded font-semibold">
          New Checkout
        </button>
      </div>
    </header>
  );
};

export default Header;