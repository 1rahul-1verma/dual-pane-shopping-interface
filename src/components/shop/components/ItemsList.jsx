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

    return <div style={{border:'1px solid black', borderRadius: '8px', padding:'16px', flexGrow: 1, display: 'flex', flexDirection: 'column', borderColor : isSelected ? 'green' : 'black', color : isSelected ? 'green' : 'black', cursor: 'pointer'}} onClick={_onSelect} data-testid={`item-${item.id}`}>
        <div style={{display: 'flex', justifyContent: 'center', fontSize:'24px', fontWeight: '600',  cursor: 'pointer'}}>{item.name}</div>
        <div>{item.description}</div>
    </div>
}

export const ItemsList = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelect = useCallback((selectedItem) => {
        setSelectedItems(prev => {
            return [...prev, selectedItem];
        });
    }, []);

    return <div style={{display: 'flex', border: '1px solid black', padding: '16px', borderRadius: '8px', gap: '8px', width: '100%', flexWrap: 'wrap'}}>
        {ITEMS_LIST.map(item => (
            <Item key={item.id} item={item} onSelect={onSelect} isSelected={selectedItems.includes(item)} />
        ))}
    </div>
}