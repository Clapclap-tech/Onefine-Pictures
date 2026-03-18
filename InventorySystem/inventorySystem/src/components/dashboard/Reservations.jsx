const Reservations = () => {
  return (
    <div className="bg-white rounded border shadow-sm p-6">
      <h3 className="font-bold mb-4">Upcoming Reservations</h3>

      <div className="space-y-3 text-sm">
        <div className="p-3 bg-gray-50 rounded">
          <p className="font-semibold">Fashion Shoot</p>
          <p className="text-gray-500">Oct 24 - 09:00 AM</p>
        </div>

        <div className="p-3 bg-gray-50 rounded opacity-70">
          <p className="font-semibold">Wedding</p>
          <p className="text-gray-500">Oct 25 - 01:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Reservations;