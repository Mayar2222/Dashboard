import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CatalogueProduits from "./components/CatalogueProduits";
import Categories from "./components/Categories";
import Layout from "./components/shared/Layout";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route path="Categories"  element={<Categories/>}/>


        </Route>
      </Routes>
      </Router>
  );
}

export default App;
