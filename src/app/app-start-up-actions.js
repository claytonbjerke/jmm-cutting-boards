export const APP_START_UP = 'APP_START_UP';
export function appStartUp(loggedIn) {
  return {
    type: APP_START_UP,
    loggedIn
  };
}
