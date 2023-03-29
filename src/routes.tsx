import LoadingScreen from "components/LoadingScreen";
import useSettings from "hooks/useSettings";
// import DashboardLayoutV1 from "layouts/layout-v1/DashboardLayout";
// import LayoutV2 from "layouts/layout-v2/LayoutV2";

import DashboardLayoutV3 from "layouts/layout-v3/DashboardLayout";
import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { getCookie } from "utils/cookies/cookies";
import { Navigate } from "react-router-dom";
import { Message } from "@mui/icons-material";
const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// dashboards

const Marketplaces = Loadable(
  lazy(() => import("./pages/marketplaces/nfts/nfts-marketplace"))
);
const MarketplaceDetails = Loadable(
  lazy(() => import("./pages/marketplaces/nfts/nft-details"))
);
const TransactionCard = Loadable(
  lazy(() => import("./pages/marketplaces/nfts/nft-details"))
);
const TransactionPayment = Loadable(
  lazy(() => import("./pages/transaction-payment"))
);
const TransactionBilling = Loadable(
  lazy(() => import("./pages/transaction-billing"))
);
const TransactionComplete = Loadable(
  lazy(() => import("./pages/transaction-complete"))
);
const UserProfile = Loadable(lazy(() => import("./pages/user-profile")));
const BookTracking = Loadable(lazy(() => import("./pages/book-tracking")));
const BookReading = Loadable(lazy(() => import("./pages/book-reading")));
const BookSwaping = Loadable(lazy(() => import("./pages/book-swaping")));
const PushlishBook = Loadable(lazy(() => import("./pages/pushlish-book")));
const CommitmentAnalytics = Loadable(
  lazy(() => import("./pages/commision-analytics"))
);

const Messages = Loadable(lazy(() => import("./pages/message")));
const HomePage = Loadable(lazy(() => import("./pages/newFeed")));
const PostDetails = Loadable(
  lazy(() => import("./pages/contents/post-details"))
);
const CollectionsMarketplace = Loadable(
  lazy(() => import("./pages/marketplaces/collections/collections-marketplace"))
);
// authentication

// 404/Error page
const Error = Loadable(lazy(() => import("./pages/404")));

const ActiveLayout = () => {
  const { settings } = useSettings();
  // console.log("settings.activeLayout", settings.activeLayout);
  // switch (settings.activeLayout) {
  //   case "layout1":
  //     return <DashboardLayoutV1 />;
  //   case "layout2":
  //     return <LayoutV2 />;
  //   case "layout3":
  //     return <DashboardLayoutV3 />;
  //   default:
  return <DashboardLayoutV3 />;
  // }
};

const routes = () => {
  return [
    ...authRoutes,
    {
      path: "dashboards",
      element: <ActiveLayout />,
      children: dashboardRoutes,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};

const authRoutes = [
  { path: "/", element: <Navigate to="/dashboards" /> },

  // { path: "login", element: <Login /> },
  // { path: "login-v2", element: <LoginV2 /> },
  // { path: "register", element: <Register /> },
  // { path: "register-v2", element: <RegisterV2 /> },
  // { path: "new-password", element: <NewPassword /> },
  // { path: "forget-password", element: <ForgetPassword /> },
  // { path: "forget-password-v2", element: <ForgetPasswordV2 /> },
  // { path: "two-step-verification", element: <TwoStepVerify /> },
];

const dashboardRoutes = [
  {
    path: "",
    element: <Navigate to="/dashboards/home" />,
  },
  { path: "home", element: <HomePage /> },
  {
    path: ":author_id/post/:post_id",
    element: <PostDetails />,
    params: { id: "123" },
  },
  { path: "messages", element: <Messages /> },

  { path: "wallet", element: <UserProfile /> },
  { path: "marketplaces", element: <Marketplaces /> },
  {
    path: "marketplace-details/:id",
    element: <MarketplaceDetails />,
    params: { id: "123" },
  },
  { path: "transaction-card", element: <TransactionCard /> },
  { path: "transaction-payment", element: <TransactionPayment /> },
  {
    path: "transaction-billing/:id",
    element: <TransactionBilling />,
    params: { id: "123" },
  },
  { path: "transaction-complete", element: <TransactionComplete /> },
  {
    path: "user-profile/:service_id",
    element: <UserProfile />,
    params: { service_id: "123" },
  },
  {
    path: "book-tracking/:book_id",
    element: <BookTracking />,
    params: { book_id: "123" },
  },
  { path: "book-reading/:id", element: <BookReading />, params: { id: "123" } },
  {
    path: "book-swaping/:book_id",
    element: <BookSwaping />,
    params: { book_id: "123" },
  },

  { path: "pushlish/", element: <PushlishBook />, params: { id: "123" } },
  {
    path: "commitment-analytics",
    element: <CommitmentAnalytics />,
    params: { book_id: "123" },
  },
  {
    path: "popular-collections",
    element: <CollectionsMarketplace />,
    params: { book_id: "123" },
  },
];

export default routes;
