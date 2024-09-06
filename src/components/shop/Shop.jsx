import { ItemsList } from './components/ItemsList';
import { Cart } from './components/Cart';

// This component renders left(ItemsList) and right(Cart) pane.
export const Shop = () => {
  return (
    <div className="w-full flex justify-center flex-col gap-5 p-8">
      <div className="text-2xl font-black flex justify-center">
        Shopping Cart!
      </div>

      <div className="flex flex-1 w-full gap-4">
        <div className="flex-1">
          <ItemsList selectedItems={selectedItems} onSelect={onSelect} />
        </div>

        <div className="flex-1">
          <Cart selectedItems={selectedItems} onRemove={onSelect} />
        </div>
      </div>
    </div>
  );
};
