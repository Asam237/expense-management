import { DefaultLayout } from "@/layouts/default.layout";
import { useAuthStore } from "../login";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push("/login");
  }, [router]);
  return (
    <DefaultLayout>
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Total Income
            </h2>
            <p className="text-3xl font-bold text-gray-800">$10,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Total Expenses
            </h2>
            <p className="text-3xl font-bold text-gray-800">$7,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Savings
            </h2>
            <p className="text-3xl font-bold text-gray-800">$2,500</p>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="bg-white rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">Freelance Project</td>
                  <td className="py-3 px-6 text-left">Jan 1, 2025</td>
                  <td className="py-3 px-6 text-right text-green-600">
                    $1,500
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">Groceries</td>
                  <td className="py-3 px-6 text-left">Jan 3, 2025</td>
                  <td className="py-3 px-6 text-right text-red-600">-$200</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">Gift</td>
                  <td className="py-3 px-6 text-left">Jan 5, 2025</td>
                  <td className="py-3 px-6 text-right text-green-600">$100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Home;
