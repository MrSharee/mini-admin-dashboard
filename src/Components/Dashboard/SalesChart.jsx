import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { GrBarChart } from "react-icons/gr";
import useFetch from "../../hooks/UseFetch";
import Api from "../../api/Api";
import formatNum from "../../utils/formatNum";

function SalesChart() {
  const { data } = useFetch(Api.carts);
  const carts = data.carts || [];
  const cartdata = carts.map((cart) => ({
    name: cart.id,
    sales: cart.total,
  }));

  return (
    <div className="w-3/5 rounded-lg bg-surface px-7  py-6 flex flex-col justify-center  gap-7">
      <span className="flex flex-row justify-end items-center gap-1.5   ">
        <h1 className="text-muted text-base">آمار فروش</h1>
        <GrBarChart className="text-primary" />
      </span>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cartdata}>
            <CartesianGrid
              stroke="#252A3A"
              strokeDasharray="1 1"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#888", fontSize: 10 }}
              tickMargin={10}
              axisLine={true}
              tickLine={false}
              tickFormatter={formatNum}
            />

            <YAxis
              tick={{ fill: "#888", fontSize: 10 }}
              axisLine={true}
              tickLine={false}
              tickFormatter={formatNum}
              tickMargin={10}
            />
            <Tooltip
              formatter={formatNum}
              labelFormatter={formatNum}
              contentStyle={{
                backgroundColor: "#0f111a",
                border: "none",
                borderRadius: "10px",
                fontSize: "12px",
              }}
              labelStyle={{
                color: "#a5a9b8",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              name="فروش"
              stroke="#9B5CFF"
              strokeWidth={1}
              dot={{
                fill: "#9B5CFF",
                r: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
