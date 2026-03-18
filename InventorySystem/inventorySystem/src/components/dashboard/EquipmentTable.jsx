const EquipmentTable = () => {
  const items = [
    {
      name: "Canon RF 24-70mm",
      category: "Lenses",
      checkouts: 128,
      status: "Available",
    },
    {
      name: "Sony A7R V",
      category: "Camera",
      checkouts: 112,
      status: "Checked Out",
    },
  ];

  return (
    <div className="bg-white rounded border shadow-sm">
      <div className="p-6 border-b">
        <h3 className="font-bold">Most Used Equipment</h3>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
          <tr>
            <th className="px-6 py-3 text-left">Equipment</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">Checkouts</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="border-t">
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.checkouts}</td>
              <td className="px-6 py-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable;