const TableElement = ({ purchase }) => {
  const { user, product, purchase_quantity, total } = purchase ?? {};
  return (
    <tr className="border-b border-neutral-200 dark:border-white/10">
      <td className="whitespace-nowrap px-6 py-4">{product?.product_name}</td>
      <td className="whitespace-nowrap px-6 py-4">{user?.name}</td>
      <td className="whitespace-nowrap px-6 py-4">{purchase_quantity}</td>
      <td className="whitespace-nowrap px-6 py-4">{product?.product_price}</td>
      <td className="whitespace-nowrap px-6 py-4">{total}</td>
    </tr>
  );
};

export default TableElement;
