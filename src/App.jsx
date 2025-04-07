import "./App.css";
import SimpleAreaChart from "./components/SimpleAreaChart";
import SimpleBarChart from "./components/SimpleBarChart";
import SimpleLineChart from "./components/SimpleLineChart";
import StackedAreaChart from "./components/StackedAreaChart";

function App() {
  return (
    <>
      <SimpleLineChart />
      <SimpleAreaChart />
      <SimpleBarChart />
      <StackedAreaChart />
    </>
  );
}

export default App;
