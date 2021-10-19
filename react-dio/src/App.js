import Item from "./components/item";
import Card from "./components/Card"
import Estado from "./components/Estado"

function App() {

  const style = {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px"
  }
  return (
    <div>
      <ul style={style}>
        <Card nomeCurso="Trabalhando com componentes em react">
          <Item>item 1</Item>
          <Item>item 2</Item>
          <Estado />
        </Card>

      <Card>

      </Card>

      </ul>
    </div>
  );
}

export default App;
