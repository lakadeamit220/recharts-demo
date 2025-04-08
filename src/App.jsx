import "./App.css";
import BiaxialBarChart from "./components/BiaxialBarChart";
import BrushBarChart from "./components/BrushBarChart";
import CustomShapeBarChart from "./components/CustomShapeBarChart";
import PositiveAndNegativeBarChart from "./components/PositiveAndNegativeBarChart";
import SimpleAreaChart from "./components/SimpleAreaChart";
import SimpleBarChart from "./components/SimpleBarChart";
import SimpleLineChart from "./components/SimpleLineChart";
import StackedAreaChart from "./components/StackedAreaChart";
import StackedBarChart from "./components/StackedBarChart";

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
    </>
  );
}

export default App;
