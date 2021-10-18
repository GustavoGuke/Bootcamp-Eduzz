import Item from "./components/item";
import Card from "./components/Card"
import Estado from "./components/Estado"

function App() {
  return (
    <div>
      <ul>
        <Item>item 1</Item>
        <Item>item 2</Item>
        <Card/>
        <Estado/>
      </ul>
    </div>
  );
}

export default App;
