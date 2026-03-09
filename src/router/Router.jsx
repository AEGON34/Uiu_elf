import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Committee from "../pages/Committee";
import AdvisoryPanel from "../pages/AdvisoryPanel";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import JoinUs from "../pages/JoinUs";
import Gallery from "../pages/Gallery";
import FeaturedEvents from "../pages/FeaturedEvents";
import PresentationChampsS1 from "../pages/PresentationChampsS1";
import PresentationChampsS2 from "../pages/PresentationChampsS2";
import July36Challenge from "../pages/July36Challenge";
import Developers from "../pages/Developers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "committee",
        element: <Committee />,
      },
      {
        path: "advisory-panel",
        element: <AdvisoryPanel />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "featured-events",
        element: <FeaturedEvents />,
      },
      {
        path: "events/presentation-champs-s1",
        element: <PresentationChampsS1 />,
      },
      {
        path: "events/presentation-champs-s2",
        element: <PresentationChampsS2 />,
      },
      {
        path: "events/july-36-challenge",
        element: <July36Challenge />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "events/:id",
        element: <EventDetails />,
      },
      {
        path: "register/:id",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "join-us",
        element: <JoinUs />,
      },
      {
        path: "join",
        element: <JoinUs />,
      },
      {
        path: "developers",
        element: <Developers></Developers>
      },
    ],
  },
]);

export default Router;