import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {

  return (
         //aqui é tipo um html do script
<>

      <NavBar />
      <div className="container">
        <h1 className="text-primary">Hello World!!</h1>
      <DataTable/>

      </div>
      <Footer/>
    </>
  );
}

export default App; //esta exportando a funçao