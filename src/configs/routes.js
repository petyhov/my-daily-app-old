export const routes = {
  login: '/login',
  password: '/password',
  game: '/game',
  statistics: '/statistics',
  dashboard: '/dashboard',
  wallet: '/wallet',
};

export const restrictedRoutes = [routes.login, routes.password];

export const routesData = {
  game: {
    name: 'Гра',
    image: 'fa-solid fa-dice',
    route: routes.game,
  },
  statistics: {
    name: 'Статистика по грі',
    image: 'fa-solid fa-book-open',
    route: routes.statistics,
  },
  wallet: {
    name: 'Гаманець',
    image: 'fa-solid fa-wallet',
    route: routes.wallet,
  },
};
