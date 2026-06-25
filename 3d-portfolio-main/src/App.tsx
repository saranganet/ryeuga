import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <MainContainer />
    </Suspense>
  );
};

export default App;
