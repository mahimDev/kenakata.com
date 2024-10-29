import { Link } from "react-router-dom";


const ShoppingCards = ({ product }) => {
    const { category, rate,
        count, rating, price, image,
        id, title, description } = product

    return (
        <div>
            <div className="border-2 border-[#2a7715] rounded-xl p-4">
                <div className="h-[400px] rounded-xl w-full overflow-hidden">
                    <img
                        className="rounded-xl h-full w-full  object-cover transition-transform duration-300 transform hover:scale-110"
                        src={image} alt="" />
                </div>

                <div className="flex justify-between items-center my-2">
                    <h1 className="ml-1 font-semibold">{category}</h1>
                    <p className="bg-[#FFD700] px-3 rounded font-bold ">${price}</p>
                </div>
                <div className="border border-[#2a7715]"></div>


                <div className="flex justify-between items-center my-2">
                    <div className=" items-center">
                        {title}

                    </div>

                    <Link to={`/shopping/${id}`}><button
                        className="border rounded py-1 px-3 font-medium bg-[#2a7715] text-white hover:text-[#2a7715] hover:bg-white hover:border-[#2a7715]"
                    >
                        Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCards;