import "./App.css";
import InputField from "./components/InputField/InputField";
import PostList from "./components/PostList/PostList";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
        {!showModal && (
          <button className="button" onClick={() => setShowModal(!showModal)}>
            Add product
          </button>
        )}
        {showModal && (
          <InputField showModal={showModal} setShowModal={setShowModal} />
        )}
      <ProductList />
      <PostList />
    </div>
  );
}

export default App;
