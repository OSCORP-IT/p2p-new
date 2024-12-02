import { useRef, useEffect } from "react";
import { Chart } from "chart.js";

const ChartWrapper = ({ children }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Cleanup: destroy all lingering Chart.js instances
    return () => {
      Object.keys(Chart.instances).forEach((key) => {
        Chart.instances[key]?.destroy();
      });
    };
  }, []);

  return <div ref={chartRef}>{children}</div>;
};

export default ChartWrapper;
