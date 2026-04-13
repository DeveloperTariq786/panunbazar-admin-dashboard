export const APP_ROUTES = {
  PUBLIC: {
    HOME: '/',
  },
  AUTH: {
    LOGIN: '/login',
  },
  DASHBOARD: {
    ROOT: '/dashboard',
    // Order Module Routes
    ORDERS: '/dashboard/orders',
    ADD_ORDER: '/dashboard/orders/add',
    // Product Module Routes
    PRODUCTS: '/dashboard/products',
    ADD_PRODUCT: '/dashboard/products/add',
  }
} as const;

// Optional: You can also export types if needed for highly strict prop typing later
export type AppRoute = typeof APP_ROUTES;