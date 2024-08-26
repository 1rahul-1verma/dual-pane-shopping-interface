export const Cart = ({selectedItems = [], onRemove}) => {
    return <div style={{maxHeight: '50vh', overflow: 'auto', position: 'sticky', top: '8px', display: 'flex', border: '1px solid black', padding: '16px', borderRadius: '8px', gap: '8px', width: '100%', flexDirection: 'column', minWidth: '200px'}}>
        <div style={{color:'blue', fontSize:'24px'}}>Cart</div>
        {selectedItems.map((item, index) => (
        <div style={{display: 'flex'}} data-testid={`cart-item-${index+1}`}>
            <div style={{flex: 'none'}}>{index+1}. </div>
            <div style={{flexGrow: 1, flexBasis:'0%', flexShrink: 1}}>{item.name}</div>
            <div style={{flex: 'none', border: '1px solid red', padding: '2px', paddingLeft:'4px', paddingRight: '4px', borderRadius: '8px', color: 'red'}} onClick={() => onRemove(item)} data-testid={`remove-item-${index+1}`}> Remove </div>
        </div>))}
    </div>
}