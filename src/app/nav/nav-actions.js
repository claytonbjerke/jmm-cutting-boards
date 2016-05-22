export const OPEN_SIDE_NAV = 'OPEN_SIDE_NAV';
export function openSideNav() {
  return {
    type: OPEN_SIDE_NAV
  };
}

export const CLOSE_SIDE_NAV = 'CLOSE_SIDE_NAV';
export function closeSideNav() {
  return {
    type: CLOSE_SIDE_NAV
  };
}

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export function toggleSideNav() {
  return {
    type: TOGGLE_SIDE_NAV
  };
}
