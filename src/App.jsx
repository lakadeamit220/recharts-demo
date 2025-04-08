import "./App.css";
import BiaxialBarChart from "./components/BiaxialBarChart";
import BrushBarChart from "./components/BrushBarChart";
import CustomShapeBarChart from "./components/CustomShapeBarChart";
import MultipleYAxesScatterChart from "./components/MultipleYAxesScatterChart";
import PositiveAndNegativeBarChart from "./components/PositiveAndNegativeBarChart";
import RadialBarChartExample from "./components/RadialBarChart";
import ScatterAndLineOfBestFit from "./components/ScatterAndLineOfBestFit";
import SimpleAreaChart from "./components/SimpleAreaChart";
import SimpleBarChart from "./components/SimpleBarChart";
import SimpleLineChart from "./components/SimpleLineChart";
import SimpleRadarChart from "./components/SimpleRadarChart";
import SimpleTreemap from "./components/SimpleTreemap";
import StackedAreaChart from "./components/StackedAreaChart";
import StackedBarChart from "./components/StackedBarChart";
import TwoLevelPieChart from "./components/TwoLevelPieChart";

function App() {
  return (
    <>
      <SimpleLineChart />
      <SimpleAreaChart />
      <SimpleBarChart />
      <StackedAreaChart />
      <StackedBarChart />
      <CustomShapeBarChart />
      <BrushBarChart />
      <PositiveAndNegativeBarChart />
      <BiaxialBarChart />
      <ScatterAndLineOfBestFit />
      <MultipleYAxesScatterChart />
      <TwoLevelPieChart />
      <SimpleRadarChart />
      <RadialBarChartExample />
      <SimpleTreemap />
    </>
  );
}

export default App;
