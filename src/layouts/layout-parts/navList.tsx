import Icons from "icons/sidebar";

const index = [
  {
    title: "Dashboards",
    Icon: Icons.DashboardIcon,
    children: [
      { name: "Learning Management", path: "/dashboards" },
      { name: "Job Management", path: "/dashboards/job-management" },
      { name: "CRM", path: "/dashboards/crm" },
      { name: "Sales", path: "/dashboards/sales" },
      {
        name: "Sub Child",
        path: "/dashboards/sub-child",
        subChildren: [
          {
            name: "Sub Child V1",
            path: "/dashboards/sub-child-v1",
          },
          {
            name: "Sub Child V2",
            path: "/dashboards/sub-child-v2",
          },
          {
            name: "Sub Child V3",
            path: "/dashboards/sub-child-v3",
          },
        ],
      },
      { name: "Sales V2", path: "/dashboards/sales-v2" },
      { name: "SaaS", path: "/dashboards/saas" },
      { name: "Project Management", path: "/dashboards/project-management" },
      {
        name: "Project Management V2",
        path: "/dashboards/project-management-v2",
      },
    ],
  },
  {
    title: "User & Contact",
    Icon: Icons.UserProfileIcon,
    children: [
      { name: "Add User", path: "/dashboards/add-user" },
      { name: "User List", path: "/dashboards/user-list" },
      { name: "User List V2", path: "/dashboards/user-list-v2" },
      { name: "User Grid", path: "/dashboards/user-grid" },
      { name: "User Grid V2", path: "/dashboards/user-grid-v2" },
      { name: "Contact List", path: "/dashboards/contact-list" },
      { name: "Contact Grid", path: "/dashboards/contact-grid" },
    ],
  },
  {
    title: "Invoice",
    Icon: Icons.InvoiceIcon,
    children: [
      { name: "Invoice List", path: "/dashboards/invoice-list" },
      { name: "Invoice List V2", path: "/dashboards/invoice-list-v2" },
      { name: "Invoice Details", path: "/dashboards/invoice-details" },
      { name: "Invoice Details V2", path: "/dashboards/invoice-details-v2" },
      { name: "Create Invoice", path: "/dashboards/create-invoice" },
      { name: "Create Invoice V2", path: "/dashboards/create-invoice-v2" },
    ],
  },
  {
    title: "Ecommerce",
    Icon: Icons.EcommerceIcon,
    children: [
      { name: "Shop", path: "/dashboards/shop" },
      { name: "Shop V2", path: "/dashboards/shop-v2" },
      { name: "cart", path: "/dashboards/cart" },
      { name: "Product Details", path: "/dashboards/product-details" },
      { name: "Checkout", path: "/dashboards/checkout" },
      { name: "Checkout V2", path: "/dashboards/checkout-v2" },
      { name: "Billing Address", path: "/dashboards/billing-address" },
      { name: "Payment", path: "/dashboards/payment" },
      { name: "Payment Complete", path: "/dashboards/payment-complete" },
      { name: "Payment Complete V2", path: "/dashboards/payment-complete-v2" },
    ],
  },
  {
    title: "Admin Ecommerce",
    Icon: Icons.AdminEcommerceIcon,
    children: [
      { name: "Product List", path: "/dashboards/product-list" },
      { name: "Product Grid", path: "/dashboards/product-grid" },
      { name: "Create Product", path: "/dashboards/create-product" },
      { name: "Order Management", path: "/dashboards/order-management" },
      { name: "Product Management", path: "/dashboards/product-management" },
      { name: "Customer Management", path: "/dashboards/customer-management" },
    ],
  },
  {
    title: "Profiles",
    Icon: Icons.AccountSettingsIcon,
    children: [
      { name: "Profile", path: "/dashboards/profile" },
      { name: "Profile V2", path: "/dashboards/profile-v2" },
    ],
  },
  {
    title: "Projects",
    Icon: Icons.AccountSettingsIcon,
    children: [
      { name: "Project List V1", path: "/dashboards/project-v1" },
      { name: "Project List V2", path: "/dashboards/project-v2" },
      { name: "Project List V3", path: "/dashboards/project-v3" },
      { name: "Team Member", path: "/dashboards/team-member" },
      { name: "Project Details", path: "/dashboards/project-details" },
    ],
  },
  {
    title: "Accounts",
    Icon: Icons.AccountSettingsIcon,
    children: [
      { name: "Account", path: "/dashboards/account" },
      { name: "Account V2", path: "/dashboards/account-v2" },
    ],
  },
  {
    title: "DataTables",
    Icon: Icons.AccountSettingsIcon,
    children: [
      { name: "DataTable V1", path: "/dashboards/data-table-v1" },
      { name: "DataTable V2", path: "/dashboards/data-table-v2" },
    ],
  },
  {
    title: "Pricing",
    Icon: Icons.UserManagementIcon,
    path: "/dashboards/pricing",
  },
  {
    title: "Todo List",
    Icon: Icons.KanbanIcon,
    path: "/dashboards/todo-list",
  },
  {
    title: "Calendar",
    Icon: Icons.CalendarIcon,
    path: "/dashboards/calender",
  },
  {
    title: "Chats",
    Icon: Icons.ChatIcon,
    children: [
      { name: "Chat V1", path: "/dashboards/chat-v1" },
      { name: "Chat V2", path: "/dashboards/chat-v2" },
    ],
  },
  {
    title: "Sessions",
    Icon: Icons.SessionsIcon,
    children: [
      { name: "Sign In", path: "/login" },
      { name: "Sign In V2", path: "/login-v2" },
      { name: "Register", path: "/register" },
      { name: "Register V2", path: "/register-v2" },
      { name: "Forget Password", path: "/forget-password" },
      { name: "Forget Password V2", path: "/forget-password-v2" },
      { name: "Two Step Verification", path: "/two-step-verification" },
    ],
  },
  {
    title: "Pages",
    Icon: Icons.PagesIcon,
    children: [
      { name: "About", path: "/dashboards/about" },
      { name: "Contact", path: "/dashboards/contact" },
      { name: "Pricing", path: "/dashboards/pricing" },
      { name: "Privacy", path: "/dashboards/privacy" },
    ],
  },
];

export default index;
