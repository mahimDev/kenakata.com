import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const loder = useLoaderData()
    const { category, rate,
        count, rating, price, image,
        id, title, description } = loder
    console.log(loder)
    return (
        <>
            <div className="mt-32 w-2/5 ">
                <div className="border-2 border-[#2a7715] rounded-xl p-4">
                    <div className="flex justify-between text-center  rounded-xl ">
                        <img
                            className="rounded-xl h-[500px] w-[300px] "
                            src={image} alt="" />
                        <p ><span className="font-semibold ">Description:</span> {description}</p>
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

                        <button
                            className="border rounded py-1 px-3 font-medium bg-[#2a7715] text-white hover:text-[#2a7715] hover:bg-white hover:border-[#2a7715]"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <Link to={"/"}>   <button className="border rounded py-1 px-3 font-medium bg-[#2a7715] text-white hover:text-[#2a7715] hover:bg-white hover:border-[#2a7715]">Back</button></Link>
        </>
    );
};

export default CardDetails;