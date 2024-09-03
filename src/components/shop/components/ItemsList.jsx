import { useState, useCallback } from 'react'

const ITEMS_LIST = [
    {id: '4', name: 'MacBook Air (M2, 2022)', description: "Features Apple's M2 chip for improved performance, a larger 13.6-inch Retina display, and a redesigned, slimmer profile.", price: 1100, src:"https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg"},
    {id: '1', name: 'iPhone 15', description: "Experience cutting-edge performance and a sleek design with this smartphone's vibrant display, powerful processor, and advanced camera features.", price: 1000, src: "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15__dozjxuchowcy_large_2x.jpg"},
    {id: '5', name: 'MacBook Air (M1, 2020)', description: "Introduced the M1 chip, offering significant speed and battery life improvements in a compact, lightweight design.", price: 1500,  src:"https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg"},
    {id: '2', name: 'iPhone 15 Pro', description: "Discover top performance and sleek design with this laptop’s high-resolution display, powerful processor, and ample storage for productivity.", price: 1200, src: "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg"},
    {id: '6', name: 'MacBook Pro 16-inch (2023)', description: "Equipped with the powerful M2 Pro or M2 Max chip, it delivers high performance for professional tasks and a stunning Liquid Retina XDR display.", price: 1599,  src:"https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg"},
{id: '3', name: 'iPhone 15 Pro Max', description: "Enjoy stunning visuals and sharp details with this monitor’s high-resolution display, vibrant colors, and sleek, modern design.", price: 1400, src: "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg"},
{id: '7', name: 'MacBook Pro 14-inch (2023)', description: "Combines the M2 Pro or M2 Max chip with a 14.2-inch Liquid Retina XDR display, balancing power and portability for creative professionals.", price: 1449,  src:"https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg"},
]

const Item = ({isSelected, onSelect, item}) => {
    const _onSelect = useCallback(() =>onSelect(item), [onSelect, item]);

    return (<div className={`border-2 rounded-xl p-4 w-full relative flex gap-4 lg:flex-row flex-col ${isSelected ? 'border-lime-600 text-lime-600 shadow-lg' : 'border-gray-200'}`}>
        <div className="flex items-center">
            <img src={item.src} alt={item.name} className="max-lg:w-full lg:w-[180px] rounded-lg" />
        </div>

        <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between w-full mb-4">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{item.name}</h5>
            </div>
            <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                {item.description}
            </p>
            <div className="flex justify-between items-end flex-1">
                <button className={`font-manrope text-lg leading-9 border px-2 rounded-xl ${isSelected ? 'text-red-600 border-red-600' :'text-lime-600 border-lime-600'}`} onClick={_onSelect} data-testid={`item-${item.id}`}>{isSelected ? 'Remove' : 'Add to cart'}</button>
                <h6 className="text-indigo-600 font-manrope font-bold text-xl leading-9 text-right">${item.price}</h6>
            </div>
        </div>

    </div> );
}

export const ItemsList = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelect = useCallback((selectedItem) => {
        setSelectedItems(prev => {
            return [...prev, selectedItem];
        });
    }, []);

    return <div className="flex flex-col border-2 border-gray-200 rounded-xl p-4 gap-4">
        <div className="flex-none flex items-center justify-center px-8 w-full text-2xl font-bold text-indigo-600">Select Item to purchase</div>
     <div className="flex-1 flex justify-center gap-2 w-full flex-wrap">
        {ITEMS_LIST.map(item => (
            <Item key={item.id} item={item} onSelect={onSelect} isSelected={selectedItems.includes(item)} />
        ))}
    </div>
    </div>
}