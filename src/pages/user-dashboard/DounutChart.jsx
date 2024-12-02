import DonutChart from "react-donut-chart";

function DounutChart({ data }) {
  return (
    <div>
      <DonutChart
        height={200}
        width={200}
        innerRadius={0.6}
        strokeColor=""
        selectedOffset={0.01}
        legend={false}
        clickToggle={false}
        colors={[`#0d5152`, `#a259fb`, `#ff6b00`]}
        data={data}
      />
    </div>
  );
}

export default DounutChart;
