import { useState, useCallback } from 'react'

const ITEMS_LIST = [
{id: '1', name: 'Mobile', description: "Experience cutting-edge performance and a sleek design with this smartphone's vibrant display, powerful processor, and advanced camera features."},
{id: '2', name: 'Laptop', description: "Discover top performance and sleek design with this laptop’s high-resolution display, powerful processor, and ample storage for productivity."},
{id: '3', name: 'Monitor', description: "Enjoy stunning visuals and sharp details with this monitor’s high-resolution display, vibrant colors, and sleek, modern design."},
{id: '4', name: 'Keyboard', description: "Enhance your typing experience with this keyboard’s responsive keys, ergonomic design, and sleek aesthetics for comfortable and efficient use."},
{id: '5', name: 'Controller', description: "Elevate your gaming with this controller’s precise buttons, ergonomic design, and responsive feedback for an immersive gaming experience."},
{id: '6', name: 'Mouse', description: "Optimize your productivity with this mouse’s precise tracking, ergonomic design, and customizable buttons for a smooth and efficient workflow."},
{id: '7', name: 'Adapter', description: "Streamline your connections with this adapter’s versatile ports, compact design, and reliable performance for seamless device integration."},
{id: '8', name: 'Joystick', description: "Enhance your gaming with these joysticks’ precise control, ergonomic design, and responsive feedback for a dynamic and immersive experience."},
{id: '9', name: 'Charger', description: "Keep your laptop powered with this charger’s fast charging capability, durable design, and reliable performance for uninterrupted productivity."},
{id: '10', name: 'Data Cable', description: "Ensure fast and reliable transfers with this data cable’s durable construction, universal compatibility, and efficient performance for seamless connectivity."}

]

const Item = ({isSelected, onSelect, item}) => {
    const _onSelect = useCallback(() =>onSelect(item), [onSelect, item]);

    return <div className={`border rounded-xl p-4 flex-col max-w-80 relative cursor-pointer ${isSelected ? 'border-lime-600 text-lime-600 shadow-lg' : 'border-black'}`} onClick={_onSelect} data-testid={`item-${item.id}`}>
            <div className="absolute inset-2"><input type="checkbox" id={`item-${item.id}`} checked={isSelected} /></div>
            <div className="flex justify-center text-lg font-semibold">{item.name}</div>
            <div className="text-center text-sm">{item.description}</div>
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
        <div className="flex-none flex items-center justify-center px-8 w-full text-xl font-bold text-indigo-500">Select Item to purchase</div>
     <div className="flex-1 flex justify-center gap-2 w-full flex-wrap">
        {ITEMS_LIST.map(item => (
            <Item key={item.id} item={item} onSelect={onSelect} isSelected={selectedItems.includes(item)} />
        ))}
    </div>
    </div>
}