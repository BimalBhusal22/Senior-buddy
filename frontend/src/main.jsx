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
import "./css/10_popUpNotification.css";
import Home from "./routes/Home.jsx";
import MentorProfile from "./routes/MentorProfile.jsx";
import UserProfile, {
  action as userProfileAction,
} from "./routes/UserProfile.jsx";
import SignUp, { action as signUpAction } from "./routes/SignUp.jsx";
import SignIn, { action as signInAction } from "./routes/SignIn.jsx";
import BecomeAMentor, {
  action as becomeAMentorAction,
} from "./routes/BecomeAMentor.jsx";
import AdminDashboard from "./routes/AdminDashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index.js";
import SearchOutput from "./routes/SearchOutput.jsx";
import FilterOutput from "./routes/FilterOutput.jsx";
import Container from "./routes/Container.jsx";
import BigContainer from "./components/home/BigContainer.jsx";
import ExtendedMentorProfile from "./routes/ExtendedMentorProfile.jsx";
import ViewMentors from "./components/dashboard/ViewMentors.jsx";
import ViewUsers from "./components/dashboard/ViewUsers.jsx";
import ViewMentorRequests from "./components/dashboard/ViewMentorRequests.jsx";
import AddMentor, {
  action as addMentorAction,
} from "./components/dashboard/AddMentor.jsx";

import UpdateMentor, {
  action as updateMentorAction,
} from "./components/dashboard/UpdateMentor.jsx";
import DeleteMentor from "./components/dashboard/DeleteMentor.jsx";
import Failure from "./components/esewa/Failure.jsx";
import Success from "./components/esewa/Success.jsx";

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
        path: "/extended_mentor_profile",
        element: <ExtendedMentorProfile />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: "sign_in",
        element: <SignIn />,
        action: signInAction,
      },
      {
        path: "become_a_mentor",
        element: <BecomeAMentor />,
        action: becomeAMentorAction,
      },
      {
        path: "user_profile",
        element: <UserProfile />,
        action: userProfileAction,
      },
      {
        path: "payment_success",
        element: <Success />,
      },
      {
        path: "payment_failure",
        element: <Failure />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard/add_mentor",
        element: <AddMentor />,
        action: addMentorAction,
      },
      {
        path: "/dashboard/update_mentor",
        element: <UpdateMentor />,
        action: updateMentorAction,
      },
      {
        path: "/dashboard/delete_mentor",
        element: <DeleteMentor />,
      },
      {
        path: "/dashboard/view_mentors",
        element: <ViewMentors />,
      },
      {
        path: "/dashboard/view_users",
        element: <ViewUsers />,
      },
      {
        path: "/dashboard/view_mentor_requests",
        element: <ViewMentorRequests />,
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
