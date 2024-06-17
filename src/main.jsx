import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/errorMessage/errorPage";
import "./index.css";
import App from "./App";
import About from "./components/about_us"; // Ensure this is the correct import statement
import Services from "./components/service";
import Blog from "./components/blog";
import ContactUs from './components/contact_us'
import OurStory from "./components/page/ourStory";
import CorPorate from "./components/page/corPorate";
import TravelPackages from "./components/page/travelPackages";
import AffiliatePrograms from "./components/page/affiliate";
import AncillaryServices from "./components/page/ancillary";
import OurAncillService from "./components/page/ancillService";
import PartnerPlusConnect from "./components/page/parterPlus";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about", // Path should be lowercase and match the link
    element: <About />,
  },
  {
    path: "services", // Path should be lowercase and match the link
    element: <Services />,
  },
  {
    path: "blog", // Path should be lowercase and match the link
    element: <Blog />,
  },
  {
    path: "contact", // Path should be lowercase and match the link
    element: <ContactUs />,
  },

  // pages
  {
    path: "ourstory", // Path should be lowercase and match the link
    element: <OurStory/>,
  },
   {
    path: "corPorate", // Path should be lowercase and match the link
    element: <CorPorate />,
  },
    {
    path: "travelPackages", // Path should be lowercase and match the link
    element: <TravelPackages/>,
  },
    {
    path: "affiliate", // Path should be lowercase and match the link
    element: <AffiliatePrograms/>,
  },
    {
    path: "ancillary", // Path should be lowercase and match the link
    element: <AncillaryServices/>,
  },
    {
    path: "ancill", // Path should be lowercase and match the link
    element: <OurAncillService/>,
  },
    {
    path: "partnerPlus", // Path should be lowercase and match the link
    element: <PartnerPlusConnect />,
  },
   
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
