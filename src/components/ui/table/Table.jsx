import TableElement from "./TableElement";

const Table = ({ data }) => {
  const { purchases, totalPrice, totalPurchasePrice, totalPurchaseQuantity } =
    data ?? {};

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {purchases?.length
                  ? purchases.map((purchase) => (
                      <TableElement
                        key={purchase?.order_no}
                        purchase={purchase}
                      />
                    ))
                  : ""}
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-6 py-4 font-bold text-end" colSpan="2">
                    Gross Total:
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold">
                    {totalPurchaseQuantity}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold">
                    {totalPrice}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-bold">
                    {totalPurchasePrice}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
