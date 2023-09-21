import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

const MainUi = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainUi;