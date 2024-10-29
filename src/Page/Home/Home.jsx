import { Outlet } from "react-router-dom";
import NavBer from "../../Components/Navber/NavBer";
import Banner from "../../Components/Banner/Banner";
const Home = () => {

    return (
        <div>
            <NavBer></NavBer>
            <Banner></Banner>
            <div className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;