export const APP_START = 'APP_START';
export function appStart(loggedIn) {
  return {
    type: APP_START,
    loggedIn
  };
}
