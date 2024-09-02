
import { ItemsList } from './components/ItemsList';
import { Cart } from './components/Cart';

export const Shop = () => {


    return <div className="w-full flex justify-center flex-col gap-5 p-8"> 
            <div className="text-2xl flex justify-center">Welcome to the shop</div>

            <div  className="flex flex-1 w-full">
                <div className="flex-1 p-4">
                    <ItemsList/>
                </div>

                <div className="flex-1 p-4">
                    <Cart/>
                </div>
            </div>

        </div>
}