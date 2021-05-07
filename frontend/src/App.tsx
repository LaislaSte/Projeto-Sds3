import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";


function App() {

  return (
    //aqui é tipo um html do script
    <>


      <NavBar />
      <div className="container">
        <h1 className="text-primary  py-3 ">Dashboard de Vendas!</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center . text-secundary">Porcentagem de sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center . text-secundary">Vendas</h5>
            <DonutChart />
          </div>

        </div>

        <div className="py-5 . text-center">
          <h2 className="text-primary">Vendas Feitas</h2>
        </div>

        <DataTable />

      </div>
      <Footer />
    </>
  );
}

export default App;