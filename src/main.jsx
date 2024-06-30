import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorMessage/errorPage";
import "./index.css";
import App from "./App";
import About from "./components/about_us"; // Ensure this is the correct import statement
import Services from "./components/service";
import Blog from "./components/blog";
import ContactUs from "./components/contact_us";
import OurStory from "./components/page/ourStory";
import CorPorate from "./components/page/corPorate";
import TravelPackages from "./components/page/travelPackages";
import AffiliatePrograms from "./components/page/affiliate";
import AncillaryServices from "./components/page/ancillary";
import OurVisaService from "./components/page/ourVisa";
import PartnerPlusConnect from "./components/page/parterPlus";
import BlogPost from "./components/page/blogPostStack";
import PageTitle from "./components/pageTitle/pageTitle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about-finchglow-travels", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title=" About Finchglow Travels | Your No. 1 Travel Consolidator" />
        <About />
      </>
    ),
  },
  {
    path: "our-services", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title=" Our Services | Finchglow Travels " />
        <Services />
      </>
    ),
  },
  {
    path: "blog-home", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Blog Home | Finchglow Travels  " />
        <Blog />
      </>
    ),
  },
  {
    path: "contact-us", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Contact Us | Finchglow Travels" />
        <ContactUs />
      </>
    ),
  },

  // pages
  {
    path: "affiliate-programme", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Affiliate Programme | Finchglow Travels " />
        <AffiliatePrograms />
      </>
    ),
  },
  {
    path: "ancillary-services", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title=" Ancillary Services | Finchglow Travels " />
        <AncillaryServices />
      </>
    ),
  },
  {
    path: "finchglow-travels-story", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title=" Finchglow Travels Story | Your No. 1 Travel Consolidator" />
        <OurStory />
      </>
    ),
  },
  {
    path: "corPorate-travel-management", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Corporate Travel Management | Finchglow Travels" />
        <CorPorate />
      </>
    ),
  },
  {
    path: "customised-travel-packages", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Customised Travel Packages | Finchglow Travels " />
        <TravelPackages />
      </>
    ),
  },

  {
    path: "visa-and-immigration-services", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Visa and Immigration Services | Finchglow Travels" />
        <OurVisaService />
      </>
    ),
  },
  {
    path: "partnerPlus-connect", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title=" PartnerPlus Connect | Finchglow Travels " />
        <PartnerPlusConnect />
      </>
    ),
  },
  {
    path: "blog-read", // Path should be lowercase and match the link
    element: (
      <>
        <PageTitle title="Blog Read" />
        <BlogPost />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
