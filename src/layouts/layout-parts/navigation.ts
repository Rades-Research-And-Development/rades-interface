import duotone from "icons/duotone";
import { getCookie } from "utils/cookies/cookies";
export const navigations = [
  { type: "label", label: "Dashboard" },
  // { name: "Overview", path: "/dashboards", icon: duotone.LayerGroup },
  // { name: "Login", path: "/dashboards/login", icon: duotone.PersonChalkboard },
  // { name: "Wallet", path: "/dashboards/wallet", icon: duotone.PersonChalkboard },
  // {
  //   name: "Popular Collections",
  //   path: "/dashboards/popular-collections",
  //   icon: duotone.AdminEcommerce,
  // },
  {
    name: "Marketplaces", 
    path: "/dashboards/marketplaces",
    icon: duotone.AdminEcommerce,
  },
  // { name: "Marketplace Details", path: "/dashboards/marketplace-details", icon: duotone.PersonChalkboard },
  // { name: "Transaction Card", path: "/dashboards/transaction-card", icon: duotone.PersonChalkboard },
  // { name: "Transaction Payment", path: "/dashboards/transaction-payment", icon: duotone.PersonChalkboard },
  // { name: "Transaction Billing", path: "/dashboards/transaction-billing", icon: duotone.PersonChalkboard },
  // { name: "Transaction Complete", path: "/dashboards/transaction-complete", icon: duotone.PersonChalkboard },
  {
    name: "User Information",
    icon: duotone.Accounts,
    children: [
      {
        name: "Wallet",
        path: "/dashboards/user-profile/4",
        icon_: duotone.AccountBalanceWalletIcon,
      },
      {
        name: "Profile",
        path: "/dashboards/user-profile/1",
        icon_: duotone.UserProfile,
      },

      {
        name: "Books",
        path: "/dashboards/user-profile/2",
        icon_: duotone.MenuBookIcon,
      },
      {
        name: "Item",
        path: "/dashboards/user-profile/5",
        icon_: duotone.CategoryIcon,
      }
    ],
  },

  {
    name: "Writer | Publisher",
    icon: duotone.PublishedWithChanges,
    children: [
      {
        name: "Publish book",
        path: "/dashboards/pushlish",
        icon_: duotone.MenuBookIcon,
      },
      {
        name: "Commitment Analytics",
        path: "/dashboards/commitment-analytics",
        icon_: duotone.CategoryIcon,
      }

    ],
  }

  // { name: "Book Tracking", path: "/dashboards/book-tracking", icon: duotone.PersonChalkboard },
  // { name: "Book Reading", path: "/dashboards/book-reading", icon: duotone.PersonChalkboard },

  // { name: "LMS", path: "/dashboards", icon: duotone.PersonChalkboard },
  // { name: "Sales 1", path: "/dashboards/sales", icon: duotone.BadgeDollar },
  // {
  //   name: "Sales 2",
  //   path: "/dashboards/sales-v2",
  //   icon: duotone.MessagesDollar,
  // },
  // {
  //   name: "Hiring",
  //   path: "/dashboards/job-management",
  //   icon: duotone.PersonCircleCheck,
  // },
  // {
  //   name: "Project 1",
  //   path: "/dashboards/project-management",
  //   icon: duotone.RectangleCirclePlus,
  // },
  // {
  //   name: "Project 2",
  //   path: "/dashboards/project-management-v2",
  //   icon: duotone.DiagramProject,
  // },

  // {
  //   name: "CRM",
  //   path: "/dashboards/crm",
  //   icon: duotone.CommentsQuestionCheck,
  //   badge: { value: "30" },
  // },
  // { name: "SaaS", path: "/dashboards/saas", icon: duotone.LayerGroup },

  // { type: "label", label: "Management" },
  // {
  //   name: "Profiles",
  //   icon: duotone.UserProfile,
  //   children: [
  //     { name: "Profile 1", path: "/dashboards/profile" },
  //     { name: "Profile 2", path: "/dashboards/profile-v2" },
  //   ],
  // },

  // {
  //   name: "Accounts",
  //   icon: duotone.Accounts,
  //   children: [
  //     { name: "Account 1", path: "/dashboards/account" },
  //     { name: "Account 2", path: "/dashboards/account-v2" },
  //   ],
  // },
  // {
  //   name: "User & Contact",
  //   icon: duotone.UserList,
  //   children: [
  //     { name: "Add User", path: "/dashboards/add-user" },
  //     { name: "User List 1", path: "/dashboards/user-list" },
  //     { name: "User List 2", path: "/dashboards/user-list-v2" },
  //     { name: "User Grid 1", path: "/dashboards/user-grid" },
  //     { name: "User Grid 2", path: "/dashboards/user-grid-v2" },
  //     { name: "Contact List", path: "/dashboards/contact-list" },
  //     { name: "Contact Grid", path: "/dashboards/contact-grid" },
  //   ],
  // },

  // {
  //   name: "Invoice",
  //   icon: duotone.Invoice,
  //   children: [
  //     { name: "Invoice List 1", path: "/dashboards/invoice-list" },
  //     { name: "Invoice List 2", path: "/dashboards/invoice-list-v2" },
  //     { name: "Invoice Details 1", path: "/dashboards/invoice-details" },
  //     { name: "Invoice Details 2", path: "/dashboards/invoice-details-v2" },
  //     { name: "Create Invoice 1", path: "/dashboards/create-invoice" },
  //     { name: "Create Invoice 2", path: "/dashboards/create-invoice-v2" },
  //   ],
  // },

  // {
  //   name: "Ecommerce",
  //   icon: duotone.Ecommerce,
  //   children: [
  //     { name: "Cart", path: "/dashboards/cart" },
  //     { name: "Payment", path: "/dashboards/payment" },
  //     { name: "Billing Address", path: "/dashboards/billing-address" },
  //     { name: "Product Details", path: "/dashboards/product-details" },
  //     { name: "Shop 1", path: "/dashboards/shop" },
  //     { name: "Shop 2", path: "/dashboards/shop-v2" },
  //     { name: "Checkout 1", path: "/dashboards/checkout" },
  //     { name: "Checkout 2", path: "/dashboards/checkout-v2" },
  //     { name: "Payment Complete 1", path: "/dashboards/payment-complete" },
  //     { name: "Payment Complete 2", path: "/dashboards/payment-complete-v2" },
  //   ],
  // },

  // {
  //   name: "Admin Ecommerce",
  //   icon: duotone.AdminEcommerce,
  //   children: [
  //     { name: "Product List", path: "/dashboards/product-list" },
  //     { name: "Product Grid", path: "/dashboards/product-grid" },
  //     { name: "Create Product", path: "/dashboards/create-product" },
  //     { name: "Order Management", path: "/dashboards/order-management" },
  //     { name: "Product Management", path: "/dashboards/product-management" },
  //     { name: "Customer Management", path: "/dashboards/customer-management" },
  //   ],
  // },

  // {
  //   name: "Projects",
  //   icon: duotone.ProjectChart,
  //   children: [
  //     { name: "Project List 1", path: "/dashboards/project-v1" },
  //     { name: "Project List 2", path: "/dashboards/project-v2" },
  //     { name: "Project List 3", path: "/dashboards/project-v3" },
  //     { name: "Team Member", path: "/dashboards/team-member" },
  //     { name: "Project Details", path: "/dashboards/project-details" },
  //   ],
  // },

  // {
  //   name: "Data Table",
  //   icon: duotone.DataTable,
  //   path: "/dashboards/data-table-v2",
  //   // children: [{ name: 'Data Table', path: '/dashboards/data-table-v2' }],
  // },

  // { type: "label", label: "Apps" },

  // { name: "Todo List", icon: duotone.TodoList, path: "/dashboards/todo-list" },
  // { name: "Calendar", icon: duotone.Calender, path: "/dashboards/calender" },
  // {
  //   name: "Chats",
  //   icon: duotone.Chat,
  //   children: [
  //     { name: "Chat 1", path: "/dashboards/chat-v1" },
  //     { name: "Chat 2", path: "/dashboards/chat-v2" },
  //   ],
  // },

  // {
  //   name: "Sessions",
  //   icon: duotone.Session,
  //   children: [
  //     {
  //       iconText: "RT",
  //       name: "Sign In",
  //       children: [
  //         { name: "Sign In 1", path: "/login" },
  //         { name: "Sign In 2", path: "/login-v2" },
  //       ],
  //     },
  //     {
  //       iconText: "RT",
  //       name: "Register",
  //       children: [
  //         { name: "Register 1", path: "/register" },
  //         { name: "Register 2", path: "/register-v2" },
  //       ],
  //     },
  //     {
  //       iconText: "RT",
  //       name: "Forget Password",
  //       children: [
  //         { name: "Forget Password 1", path: "/forget-password" },
  //         { name: "Forget Password 2", path: "/forget-password-v2" },
  //       ],
  //     },
  //     { name: "Two Step Verification", path: "/two-step-verification" },
  //   ],
  // },
  // {
  //   name: "Pages",
  //   icon: duotone.Pages,
  //   children: [
  //     { name: "Pricing", path: "/dashboards/pricing" },
  //     { name: "About", path: "/dashboards/about" },
  //     { name: "Contact", path: "/dashboards/contact" },
  //     { name: "Privacy", path: "/dashboards/privacy" },
  //   ],
  // },
  // {
  //   name: "Documentation",
  //   icon: duotone.FileCircleQuestion,
  //   type: "extLink",
  //   path: "https://uko-react-doc.vercel.app/",
  // },
];
