import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "Data 1",
      data: [10, 70, 50, 30, 90, 40, 20, 60, 70, 30],
    },
    {
      name: "Data 2",
      data: [20, 50, 80, 40, 30, 90, 50, 40, 30, 80],
    },
    {
      name: "Data 3",
      data: [30, 40, 70, 20, 80, 50, 90, 10, 40, 90],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#808080", "#005f73", "#000"],

    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    yaxis: {
      max: 100,
    },
  };

  return (
    <>
      <p className="text-xl">Scarlet ST-21D #12345678</p> <hr className="my-4" />
      <div className="px-5">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default LineChart;
