import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Historique from "./components/Historique";
import Produit from "./components/Produit";
import Layout from "./components/shared/Layout";
import Specificites from "./components/Specificites";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route path="Categories"  element={<Categories/>}/>
          <Route path="Produit"  element={<Produit/>}/>
          <Route path="Spf"  element={<Specificites/>}/>
          <Route path="historique"  element={<Historique/>}/>
          <Route path="historique"  element={<Historique/>}/>






        </Route>
      </Routes>
      </Router>
  );
}

export default App;
