// import Card from "./componnets/Card";
import Cards from "./componnets/Cards";
import Form from "./componnets/Form";

function App() {
  return (
    <div className="App">
      <p className="title">Drive</p>
      <h1 className="title-1">Ready to go electric?<br /><span>We’ll make it easy</span></h1>
        <div className="app-content">
        <Form />
        <Cards />
        </div>
    </div>
  );
}

export default App;
