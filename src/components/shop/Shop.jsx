

import { ItemsList } from './components/ItemsList';
import { Cart } from './components/Cart';

export const Shop = () => {

    return <div className="w-full flex justify-center flex-col gap-5 p-8"> 
            <div className="text-2xl font-black flex justify-center">Shopping Cart!</div>

            <div  className="flex flex-1 w-full">
                <div className="flex-1 p-4">
                    <ItemsList/>
                </div>

                <div className="p-4 w-72">
                    <Cart/>
                </div>
            </div>

        </div>
}