import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./css/1_style.css";
import "./css/1_media.css";
import "./css/2_style.css";
import "./css/2_media.css";
import "./css/3_style.css";
import "./css/3_media.css";
import "./css/4_style.css";
import "./css/4_media.css";
import "./css/5_footer.css";
import "./css/5_media_footer.css";
import "./css/6_user_profile.css";
import "./css/7_InUpMentor.css";
import "./css/8_dashboard.css";
import "./css/9_menu_filter.css";
import Home from "./routes/Home.jsx";
import MentorProfile from "./routes/MentorProfile.jsx";
import UserProfile from "./routes/UserProfile.jsx";
import SignUp from "./routes/SignUp.jsx";
import SignIn from "./routes/SignIn.jsx";
import BecomeAMentor from "./routes/BecomeAMentor.jsx";
import AdminDashboard from "./routes/AdminDashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCollege from "./components/dashboard/AddCollege.jsx";
import UpdateCollege from "./components/dashboard/UpdateCollege.jsx";
import DeleteCollege from "./components/dashboard/DeleteCollege.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import SearchOutput from "./routes/SearchOutput.jsx";
import FilterOutput from "./routes/FilterOutput.jsx";
import Container from "./routes/Container.jsx";
import BigContainer from "./components/home/BigContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Container />,
        children: [
          {
            path: "/",
            element: <BigContainer />,
            children: [
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "/search_output",
                element: <SearchOutput />,
              },
              {
                path: "/filter_output",
                element: <FilterOutput />,
              },
            ],
          },
        ],
      },
      {
        path: "/mentor_profile",
        element: <MentorProfile />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
      },
      {
        path: "sign_in",
        element: <SignIn />,
      },
      {
        path: "become_a_mentor",
        element: <BecomeAMentor />,
      },
      {
        path: "user_profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard/add_college",
        element: <AddCollege />,
      },
      {
        path: "/dashboard/update_college",
        element: <UpdateCollege />,
      },
      {
        path: "/dashboard/delete_college",
        element: <DeleteCollege />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
