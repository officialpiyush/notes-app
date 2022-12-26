import { Suspense } from "react";
import { useRoutes } from "react-router";
import routes from "~react-pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-8 max-w-xl mx-auto">
        <Suspense fallback={<div>Loading</div>}>{useRoutes(routes)}</Suspense>
      </div>
    </div>
  );
}

export default App;
