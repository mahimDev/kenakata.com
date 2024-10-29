import { NavLink } from "react-router-dom";

const NavBer = () => {
    return (

        <div className="top-0 sticky z-10 ">
            <div className="flex justify-between w-11/12 mx-auto items-center py-5 px-10   softGradient">
                <img className=" h-14" src="https://img.icons8.com/?size=100&id=rPCAH753HAqD&format=png&color=000000" alt="" />
                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-lg font-semibold">
                        <NavLink to='/'> <li>Home</li></NavLink>
                        <NavLink to='/shopping'><li>Shopping</li></NavLink>
                        <NavLink to='/about'><li>About</li></NavLink>
                        <NavLink to='/contact'><li>Contact</li></NavLink>



                    </ul>
                    <button className="border-2 border-[#2a7715]  py-1 px-3 font-semibold rounded-md">  💸 10</button>
                </div>
            </div>
        </div>

    );
};

export default NavBer;