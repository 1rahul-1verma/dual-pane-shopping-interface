import { useState, useCallback } from 'react'

const ITEMS_LIST = [
{id: '1', name: 'Mobile', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '2', name: 'Laptop', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '3', name: 'Monitor', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '4', name: 'Keyboard', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '5', name: 'Controller', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '6', name: 'Mouse', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '7', name: 'Adapter', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '8', name: 'Joystick', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '9', name: 'Charger', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
{id: '10', name: 'Data Cable', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}

]

const Item = ({isSelected, onSelect, item}) => {
    const _onSelect = useCallback(() =>onSelect(item), [onSelect, item]);

    return <div className={`border rounded-xl p-4 flex-col max-w-60 relative ${isSelected ? 'border-lime-600 text-lime-600' : 'border-black'}`} onClick={_onSelect} data-testid={`item-${item.id}`}>
            <div className="absolute inset-2"><input type="checkbox" id={`item-${item.id}`} checked={isSelected} /></div>
            <div className="flex justify-center text-xl font-semibold">{item.name}</div>
            <div className="text-center">{item.description}</div>
        </div>

}

export const ItemsList = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelect = useCallback((selectedItem) => {
        setSelectedItems(prev => {
            return [...prev, selectedItem];
        });
    }, []);

    return <div className="flex flex-col border border-black rounded-xl p-4 gap-4">
        <div className="flex-none flex items-center justify-center px-8 w-full text-xl text-indigo-500">Select Item to purchase</div>
     <div className="flex-1 flex justify-between gap-2 w-full flex-wrap">
        {ITEMS_LIST.map(item => (
            <Item key={item.id} item={item} onSelect={onSelect} isSelected={selectedItems.includes(item)} />
        ))}
    </div>
    </div>
}