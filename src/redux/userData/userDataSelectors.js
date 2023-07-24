import { createSelector } from '@reduxjs/toolkit';

// import { routesData } from '@/configs';

export const getUserData = (state) => state.userData;

export const getUserRoutes = createSelector(getUserData, (userData) => {
  if (typeof window === 'undefined') {
    return;
  }
  const permissionsRoutes = userData.permissions;

  //   const routesKeys = Object.keys(routesData);

  console.log('permissionsRoutes', permissionsRoutes.includes('game'));
  return [];
});
