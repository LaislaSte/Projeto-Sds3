const DataTable = () => {
  type Sales = {
    date: string;
    seller: string;
    visitedClients: number;
    deals: number;
    value: number;
  };
  const mockTable: Sales[] = [
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
    {
      date: '22/04/2021',
      seller: 'Barry Allen',
      deals: 25,
      value: 15017.0,
      visitedClients: 34,
    },
  ];
  return (
    <table className="w-full">
      <thead>
        <tr className="flex justify-between text-left">
          <th className="w-full font-title text-lg border-[1px] text-center">
            Data
          </th>
          <th className="w-full font-title text-lg border-[1px] border-l-0 text-center">
            Vendedor
          </th>
          <th className="w-full font-title text-lg border-[1px] border-l-0 text-center">
            Clientes visitados
          </th>
          <th className="w-full font-title text-lg border-[1px] border-l-0 text-center">
            Negócios fechados
          </th>
          <th className="w-full font-title text-lg border-[1px] border-l-0 text-center">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {mockTable.map((sale) => (
          <tr className="flex justify-between">
            <td className="w-full font-title text-lg border-[1px] border-t-0 px-14 py-3 text-center">
              {sale.date}
            </td>
            <td className="w-full font-title text-lg border-[1px] border-l-0 border-t-0 px-14 py-3 text-center">
              {sale.seller}
            </td>
            <td className="w-full font-title text-lg border-[1px] border-l-0 border-t-0 px-14 py-3 text-center">
              {sale.visitedClients}
            </td>
            <td className="w-full font-title text-lg border-[1px] border-l-0 border-t-0 px-14 py-3 text-center">
              {sale.deals}
            </td>
            <td className="w-full font-title text-lg border-[1px] border-l-0 border-t-0 px-14 py-3 text-center">
              {sale.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
