import "./App.css";
import { Pricing } from "./components/Pricing";
import { Sidebar } from "./components/Sidebar";
import { Testimonial } from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileSidebar } from "./components/MobileSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { BlogComponent } from "./components/BlogComponent";

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="relative">
        <div
          className="ml-2 text-5xl z-10 lg:hidden"
          onClick={() => setShowMobileSidebar((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </div>
        <div>
          <Pricing />
        </div>
        <div>
          <Testimonial />
        </div>
        {/* <Blogs /> */}
        <div className="ml-72">
          <BlogComponent />
        </div>
        {showMobileSidebar && <MobileSidebar />}
      </div>
    </div>
  );
}

export default App;
