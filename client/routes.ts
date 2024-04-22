export const ROUTES: AppRoute[] = [
  { path: "*", element: Missing, isPrivate: false },
  { path: PATHS.login, element: Login, isPrivate: false },
  { path: PATHS.dashboard, element: Dashboard, isPrivate: true },
  { path: PATHS.manage, element: ManagePlan, isPrivate: true },
  { path: PATHS.myAccount, element: MyAccount, isPrivate: true },
  { path: PATHS.orderHistory, element: OrderHistory, isPrivate: true },
];
