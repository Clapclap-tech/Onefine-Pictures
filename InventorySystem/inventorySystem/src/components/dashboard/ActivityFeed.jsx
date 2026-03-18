const ActivityFeed = () => {
  return (
    <div className="bg-white rounded border shadow-sm p-6 h-[400px]">
      <h3 className="font-bold mb-4">Recent Activity</h3>

      <div className="space-y-4 text-sm">
        <p>📷 Sony A7R V checked out</p>
        <p>✅ Profoto returned</p>
        <p>⚠️ Maintenance logged</p>
      </div>
    </div>
  );
};

export default ActivityFeed;