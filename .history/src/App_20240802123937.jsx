import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AjouterCommande from "./components/AjouterCommande";
import Categories from "./components/Categories";
import Historique from "./components/Historique";
import ListComm from "./components/ListComm";
import Login from "./components/Login";
import Produit from "./components/Produit";
import Layout from "./components/shared/Layout";
import Specificites from "./components/Specificites";
import Stock from "./components/Stock";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/"  element={<loggi/>}>
          <Route path="Categories"  element={<Categories/>}/>
          <Route path="Produit"  element={<Produit/>}/>
          <Route path="Spf"  element={<Specificites/>}/>
          <Route path="historique"  element={<Historique/>}/>
          <Route path="Stock"  element={<Stock/>}/>
          <Route path="ajoutercomm"  element={<AjouterCommande/>}/>
          <Route path="listecomm"  element={<ListComm/>}/>
          <Route path="/"  element={<Layout/>}/>








        </Route>
      </Routes>
      </Router>
  );
}

export default App;
