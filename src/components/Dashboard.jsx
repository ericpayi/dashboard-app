import TransactionsTable from "./TransactionsTable";

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: "1,250", color: "bg-blue-500" },
    { title: "Revenue", value: "$45,000", color: "bg-green-500" },
    { title: "Active Sessions", value: "325", color: "bg-yellow-500" },
    { title: "New Signups", value: "68", color: "bg-red-500" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl text-white ${stat.color} shadow-md hover:shadow-lg transition-all`}
          >
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <TransactionsTable />
    </div>
  );
};

export default Dashboard;
