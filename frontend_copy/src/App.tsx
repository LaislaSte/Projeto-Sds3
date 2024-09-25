import DataTable from '@components/DataTable';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import BarChart from '@components/BarChart';
import DonutChart from '@components/DonutChart';

function App() {
  return (
    <>
      <NavBar />
      <div className="p-10 bg-500 flex flex-col justify-center items-center">
        <h1 className="font-normal text-[3rem] mb-12 p-5 pl-10">
          Dashboard de Vendas!
        </h1>
        <div className="flex flex-col gap-12  w-[70vw]">
          <div className="flex gap-6 w-full ">
            <div className="w-[50%] flex flex-col">
              <h5 className="text-[1.5rem] pl-10  mb-4 text-center font-bold">
                Porcentagem de sucesso
              </h5>
              <div className="">
                <BarChart />
              </div>
            </div>

            <div className="w-[50%] flex flex-col">
              <h5 className="text-[1.5rem] pl-10  mb-4 text-center font-bold">
                Vendas
              </h5>
              <div className="">
                <DonutChart />
              </div>
            </div>
          </div>

          <div className="">
            <h5 className="text-[1.5rem] pl-10  mb-4 text-center font-bold">
              Vendas Feitas
            </h5>
            <DataTable />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
