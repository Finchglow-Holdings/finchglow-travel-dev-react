import Footer from "./contents/footer";
import Header from "./contents/header";
import Main from "./contents/main";
import PageTitle from "./pageTitle/pageTitle";







function Homepage() {
    return (
      <>
        <PageTitle title=" Finchglow Travels | Your No. 1 Travel Consolidator" />
        <div className="flex flex-col justify-center items-center relative w-full bg-gray-800">
          <Header />
          <Main />
          <Footer />
        </div>
      </>
    );
}

export default Homepage;
