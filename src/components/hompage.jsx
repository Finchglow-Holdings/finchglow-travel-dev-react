import Footer from "./contents/footer";
import Header from "./contents/header";
import TalkToUs from "./contents/talkToUs";
import Main from "./contents/main";







function Homepage() {
    return (
        <div className="flex flex-col justify-center items-center relative w-full bg-gray-800">
            <Header />
            <Main />
            <TalkToUs/>
            <Footer />
        </div>   
    );
}

export default Homepage;
