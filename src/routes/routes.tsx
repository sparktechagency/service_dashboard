// App.tsx or main.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import EmployersPage from "../pages/dashboard/EmployersPage";
import CategoryPage from "../pages/dashboard/CategoryPage";
import CandidatesPage from "../pages/dashboard/CandidatesPage";
import ContactPage from "../pages/dashboard/ContactPage";
import BlogsPage from "../pages/dashboard/BlogsPage";
import SubscribersPage from "../pages/dashboard/SubscribersPage";
import PackagesPage from "../pages/dashboard/PackagesPage";
import AboutUsPage from "../pages/settings/AboutUsPage";
import PrivacyPolicyPage from "../pages/settings/PrivacyPolicyPage";
import TermsConditionPage from "../pages/settings/TermsConditionPage";
import JobDetailsPage from "../pages/dashboard/JobDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
       {
        path: "employers",
        element: <EmployersPage />,
      },
      {
        path: "candidates",
        element: <CandidatesPage />,
      },
       {
        path: "category",
        element: <CategoryPage />,
      },
       {
        path: "subscribers",
        element: <SubscribersPage />,
      },
       {
        path: "packages",
        element: <PackagesPage />,
      },
        {
        path: "contacts",
        element: <ContactPage />,
      },
       {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms-condition",
        element: <TermsConditionPage />,
      },
      {
        path: "job-details",
        element: <JobDetailsPage />,
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
       {
        index: true,
        element: <Navigate to="/auth/signin" replace/>,
      },
      {
        path: "signin",
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtpPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found Page</h1>,
  },
]);

export default router;
