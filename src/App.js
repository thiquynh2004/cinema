import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import LoadingSuspend from "./components/Loading/LoadingSuspend";
import { homeTemplateRoutes } from "./routes/homeTemplateRoutes";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import 'swiper/css';
import "./App.scss"


function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Suspense fallback={<LoadingSuspend />}>
        <Routes>
          <Route element={<HomeTemplate />}>
            {homeTemplateRoutes.map((route, i) => {
              return (
                <Route key={i} path={route.path} element={<route.Element />}/>
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
