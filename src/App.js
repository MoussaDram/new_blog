import Layout from "./hoc/layout/Layout"
import Contact from "./Components/Contact/Contact"
import Home from "./Containers/Home/Home"
import Article from "./Containers/Articles/Article/Article"
import {
  Routes,
  Route,
} from "react-router-dom";
import Articles from "./Containers/Articles/Articles";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article" element={<Article />} />
        </Routes>

      </Layout>

    </div>
  );
}

export default App;
