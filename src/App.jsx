import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  Article,
  Article1,
  TitleSection,
  Text,
  Images,
  About,
  Usluge,
  Projekti,
  Naslovna,
  Header,
  Footer,
  HomePage,
  Kontakt,
  ONama,
  Projekti1,
  Usluge1,
  Layout,
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/oNama" element={<ONama />} />
      <Route path="/Projekti" element={<Projekti1 />} />
      <Route path="/Kontakt" element={<Kontakt />} />
      <Route path="/Usluge" element={<Usluge1 />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
