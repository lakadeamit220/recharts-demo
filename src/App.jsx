import "./App.css";
import SimpleAreaChart from "./components/SimpleAreaChart";
import SimpleBarChart from "./components/SimpleBarChart";
import SimpleLineChart from "./components/SimpleLineChart";

function App() {
  return (
    <>
      <SimpleLineChart />
      <SimpleAreaChart />
      <SimpleBarChart />
    </>
  );
}

export default App;
