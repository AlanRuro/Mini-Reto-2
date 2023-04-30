import './App.css';
import CartoonList from './components/CartoonList/CartoonList';
import React from "react";
import Search from './components/Search/Search';
import Header from './components/Header/Header';

function App() {
  const [cartoons, setCartoons] = React.useState([]);
  const [search, setSearch] = React.useState("");
  
  React.useEffect(() => {
    fetch("/v1/cartoons")
      .then((res) => res.json())
      .then((data) => setCartoons(data.data));
  }, []);
  
  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };

  const filteredCartoon = cartoons.filter((cartoon) => {
    return cartoon.cartoon_name.toLowerCase().startsWith(search);
  });

  return (
    <div className='App'>
      <Header title="CHILDHOOD CARTOONS"/>
      <Search searchChange={searchChange}/>
      <CartoonList cartoons={filteredCartoon}/>
    </div>
  );
}

export default App;
