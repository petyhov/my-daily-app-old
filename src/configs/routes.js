export const routes = {
  login: '/login',
  password: '/password',
  game: '/game',
  statistics: '/statistics',
  wallet: '/wallet',
};

export const restrictedRoutes = [routes.login, routes.password];

export const routesData = {
  game: {
    name: 'Гра',
    image: 'fa-solid fa-dice',
  },
  statistics: {
    name: 'Статистика по грі',
    image: '<i class="fa-solid fa-book-open"></i>',
  },
  wallet: {
    name: 'Гаманець',
    image: 'fa-solid fa-wallet',
  },
};
