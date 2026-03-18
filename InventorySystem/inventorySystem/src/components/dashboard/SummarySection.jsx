import SummaryCard from "./SummaryCard";

const SummarySection = () => {
  const data = [
    { title: "Total Equipment", value: 248, subtitle: "+4 this month" },
    { title: "Available", value: 182, subtitle: "73% of total" },
    { title: "Checked Out", value: 45, subtitle: "8 returning today" },
    { title: "Maintenance", value: 12, subtitle: "3 overdue" },
    { title: "Low Stock", value: 9, subtitle: "Consumables" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {data.map((item, i) => (
        <SummaryCard key={i} {...item} />
      ))}
    </div>
  );
};

export default SummarySection;