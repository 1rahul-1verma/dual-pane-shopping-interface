export const Cart = ({selectedItems = [], onRemove}) => {
    return <div className="max-h-100 overflow-auto sticky top-2 flex border border-black p-4 rounded-xl gap-2 w-full flex-col">
        <div className="text-xl text-indigo-500">Cart</div>
        {selectedItems.map((item, index) => (
        <div style={{display: 'flex'}} data-testid={`cart-item-${index+1}`}>
            <div className="flex-none">{index+1}. </div>
            <div className="flex-1" >{item.name}</div>
            <button className="flex-none border border-rose-600 py-1 px-2 text-rose-600 rounded-xl" onClick={() => onRemove(item)} data-testid={`remove-item-${index+1}`}> Remove </button>
        </div>))}
    </div>
}