const SummaryCard = ({ title, value, subtitle, color }) => {
  return (
    <div className="bg-white p-6 rounded border shadow-sm">
      <p className={`text-sm uppercase ${color}`}>{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
      <p className="text-xs mt-2 text-gray-400">{subtitle}</p>
    </div>
  );
};

export default SummaryCard;