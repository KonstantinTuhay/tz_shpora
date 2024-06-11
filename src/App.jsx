import React, { Suspense, lazy, useState } from "react";
import "./App.css";

import AllPage from "./components/AllPage";

export default function App() {
  const [reactSpin, setReactSpin] = useState(false);
  // function Loading() {
  //   return <h2>🌀 Loading...</h2>;
  // }

  const AllPage = lazy(() => import("./components/AllPage"));
  return (
    <>
      {reactSpin ? (
        <Suspense
          fallback={setTimeout(
            () => (
              <h2>🌀 Loading...</h2>
            ),
            2000
          )}
        >
          {" "}
          <AllPage />
        </Suspense>
      ) : (
        <div id="btnWrapper">
          <button id="btnStart" onClick={() => setReactSpin(true)}>
            {" "}
            Изучить React
          </button>
        </div>
      )}
      {/* <AllPage /> */}
    </>
  );
}
