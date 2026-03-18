const Sidebar = () => {
  const navItems = [
    "Dashboard",
    "Equipment Inventory",
    "Categories",
    "Check In / Out",
    "Calendar",
    "Maintenance",
  ];

  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="p-6 font-bold text-xl">PhotoVault</div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded cursor-pointer ${
              i === 0
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;