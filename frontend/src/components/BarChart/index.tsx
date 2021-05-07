import Chart from 'react-apexcharts'

const BarChart = () => {
    //como react com os grafico são funções com suas proprias logica, então não colocamos elas ditero para retornar
    //fazemos a logica antes do retorno respeitando a cadeia de bloco (block chain)
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };
    return (

        <Chart
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChart;