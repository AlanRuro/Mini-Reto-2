import './App.css';
import CartoonList from './components/CartoonList/CartoonList';
import React from "react";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/cartoons")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div>
      <CartoonList cartoons={data} ></CartoonList>
    </div>
  );
}

export default App;
