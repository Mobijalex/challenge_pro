import Button from "./componentes/button/Button";
import DropdownMenu from "./componentes/dropdown/DropDown";
import NavBar from "./componentes/dropdown/NavBar/NavBar";
import Input from "./componentes/input/Input";
import Table from "./componentes/table/Table";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <DropdownMenu />
        <Input />
        {/* <Button /> */}
      </div>
      <Table />
    </div>
  );
}

export default App;
