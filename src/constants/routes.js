// Route constants for the application
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    TRACKS: '/tracks',
    IMPORTANT_DATES: '/important-dates',
    DOCTORAL_COLLOQUIUM: '/doctoral-colloquium',
    JOURNALS: '/journals',
    REGISTRATION: '/registration',
    VENUE: '/venue',
    COMMITTEE: '/committee',
    CONTACT: '/contact',
};

// Navigation items in required order
export const NAV_ITEMS = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Call for Papers', path: ROUTES.TRACKS },
    { label: 'Important Dates', path: ROUTES.IMPORTANT_DATES },
    { label: 'Doctoral Colloquium', path: ROUTES.DOCTORAL_COLLOQUIUM },
    { label: 'Journals', path: ROUTES.JOURNALS },
    { label: 'Registration', path: ROUTES.REGISTRATION },
    { label: 'Venue', path: ROUTES.VENUE },
    { label: 'Committee', path: ROUTES.COMMITTEE },
    { label: 'Contact', path: ROUTES.CONTACT },
];
