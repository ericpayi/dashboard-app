const TransactionsTable = () => {
    const transactions = [
      { id: 1, name: "John Doe", amount: "$200", date: "2025-02-10" },
      { id: 2, name: "Jane Smith", amount: "$500", date: "2025-02-12" },
      { id: 3, name: "Alice Brown", amount: "$150", date: "2025-02-14" },
      { id: 4, name: "Mark Johnson", amount: "$300", date: "2025-02-16" },
    ];
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-2 px-4 border">{txn.name}</td>
                <td className="py-2 px-4 border">{txn.amount}</td>
                <td className="py-2 px-4 border">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TransactionsTable;
  