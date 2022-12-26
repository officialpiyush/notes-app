import { Suspense } from "react";
import { useRoutes } from "react-router";
import routes from "~react-pages";

function App() {
  return (
    <div className="max-w-xl mx-auto">
      <Suspense fallback={<div>Loading</div>}>
        {useRoutes(routes)}
      </Suspense>
    </div>
  );
}

export default App;
