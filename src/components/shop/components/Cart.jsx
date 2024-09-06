/**
 * @param {0} selectedItems -> List of items added by user in the shopping cart
 * @param {1} onRemove -> callback which can remove the item from cart
 * @return -> List of Items added by user in cart
 */
export const Cart = ({ selectedItems = [], onRemove }) => {
  return (
    <div className="max-h-100 overflow-auto sticky top-2 flex border-2 border-gray-200 p-4 rounded-xl gap-2 w-full flex-col">
      <div className="text-2xl font-bold text-indigo-600">Cart</div>
      {selectedItems.length ? (
        selectedItems.map((item, index) => (
          <div
            key={item.id}
            className="flex gap-2"
            data-testid={`cart-item-${index + 1}`}
          >
            <div className="flex-none">{index + 1}. </div>
            <div className="flex-1">{item.name}</div>
            <button
              className="flex-none border border-rose-600 py-0.5 px-2 text-rose-600 rounded-xl h-8 flex items-center"
              onClick={() => onRemove(item)}
              data-testid={`remove-item-${index + 1}`}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="flex justify-center text-lg">
          ⚠️⚠️ Cart is Empty!!! ⚠️⚠️
        </div>
      )}
    </div>
  );
};
