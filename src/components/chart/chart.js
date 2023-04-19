import React from "react";
import ChartBar from "./chartBar";
import "./chart.css";
const Chart = (props) => {
  const dataPointsValues = props.DataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.DataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
