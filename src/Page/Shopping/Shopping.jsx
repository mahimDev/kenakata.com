import { useLoaderData } from "react-router-dom";

import ShoppingCards from "../../Components/ShoppingCards/ShoppingCards";

const Shopping = () => {
    const products = useLoaderData()

    return (
        <div className="grid md:grid-cols-3 gap-10 mt-20 ">
            {
                products.map(product => <ShoppingCards key={product.id} product={product}></ShoppingCards>)
            }
        </div>
    );
};

export default Shopping;