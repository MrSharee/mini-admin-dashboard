import MiniChart from "../MiniChart";

function StatCard({ title, value, percent, icon, loading }) {
  return (
    <div className="bg-surface pb-5 px-5 rounded-lg w-sm h-52 flex flex-col justify-between">
      <div className="flex flex-row-reverse justify-between items-center p-5">
        <span className="flex flex-col items-end gap-2.5">
          <h2 className="text-base text-muted">{title}</h2>

          {loading ? (
            <div className="h-9 w-24 rounded-md bg-white/10 animate-pulse" />
          ) : (
            <h2 className="font-bold text-3xl">{value}</h2>
          )}

          {!loading && <h2 className="text-success text-xs">{percent}</h2>}
        </span>

        <span className="bg-primary-dark p-2 rounded-lg">{icon}</span>
      </div>

      <MiniChart />
    </div>
  );
}

export default StatCard;
