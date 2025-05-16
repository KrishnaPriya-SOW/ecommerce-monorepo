export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Sales</h3>
          <p className="text-3xl font-bold">$24,560</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Orders</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Products</h3>
          <p className="text-3xl font-bold">56</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Order ID</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3">#12345</td>
                <td>John Doe</td>
                <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</span></td>
                <td>$125.99</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">#12346</td>
                <td>Jane Smith</td>
                <td><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Processing</span></td>
                <td>$89.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}