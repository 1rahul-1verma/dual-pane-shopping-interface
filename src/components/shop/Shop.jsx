
import { ItemsList } from './components/ItemsList';
import { Cart } from './components/Cart';

export const Shop = () => {

    return <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap:'20px'}}> 
            <div style={{fontSize:'32px', display: 'flex', justifyContent: 'center'}}>Welcome to the shop</div>

            <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1, width: '100%'}}>
                <div style={{flexGrow: 1, padding: '16px'}}>
                    <ItemsList />
                </div>

                <div style={{flexGrow: 1, padding: '16px'}}>
                    <Cart/>
                </div>
            </div>

        </div>
}