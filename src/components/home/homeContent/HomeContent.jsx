import Carosel from "./carosel/Carosel";
import "./homecontent.css"
import SomeDetails from "./someDeatils/someDetails";

const HomeContent = () => {
    return (
        <div>
            <Carosel></Carosel>
            <SomeDetails></SomeDetails>
        </div>
    );
};

export default HomeContent;