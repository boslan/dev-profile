export const installRouter = (locationUpdatedCallback: (location: Location) => void): void => {
    window.addEventListener('popstate', () => locationUpdatedCallback(window.location));
    locationUpdatedCallback(window.location);
};

export function navigate(page: string) {
    window.history.pushState({}, '', `/${page}`);
}
