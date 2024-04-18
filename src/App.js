import "./App.css";
import { Pricing } from "./components/Pricing";
import { Sidebar } from "./components/Sidebar";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>
        <Pricing />
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
