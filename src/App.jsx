import React, { Suspense, lazy, useState, Profiler } from "react";
import "./App.css";

import AllPage from "./components/AllPage";

export default function App() {
  const [reactSpin, setReactSpin] = useState(false);
  // function Loading() {
  //   return <h2>🌀 Loading...</h2>;
  // }

  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log(id);
    console.log(phase);
    console.log(actualDuration);
    console.log(baseDuration);
    console.log(startTime);
    console.log(commitTime);
  }

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
          <Profiler id="AllPage" onRender={onRender}>
            <AllPage />
          </Profiler>
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
