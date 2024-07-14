import { Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Home from "./components/home/Home";
import Courses from "./components/cours/Courses";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </>
  );
}
