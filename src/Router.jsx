import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}
