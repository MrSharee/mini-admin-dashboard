function MiniChart() {
  return (
    <svg
      viewBox="0 0 300 60"
      className="w-full h-12"
      preserveAspectRatio="none"
    >
      <path
        d="M0 42
           C25 30, 40 35, 60 32
           C85 28, 95 8, 120 18
           C145 28, 155 48, 180 38
           C205 28, 220 35, 240 30
           C265 24, 275 12, 300 20"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
export default MiniChart;