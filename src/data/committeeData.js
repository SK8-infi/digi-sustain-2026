import {
    IMG_PATRON,
    IMG_CHAIR_GAURAV,
    IMG_CHAIR_MANOJ,
    IMG_COORD_CHETANYA,
    IMG_COORD_SHISHIR,
    IMG_ADVISORY_RAJENDRA,
    IMG_ADVISORY_MANOJ,
    IMG_ADVISORY_ARUN,
    IMG_ADVISORY_EXT_ANIL,
    IMG_ADVISORY_EXT_SATYABHUSAN,
    IMG_ADVISORY_EXT_PRASHANT,
    IMG_EDITORIAL_PRASHANT,
    IMG_EDITORIAL_ROHIT,
    IMG_EDITORIAL_JISHNU,
    IMG_EDITORIAL_SACHIN
} from '../assets/assetConstants';

// Committee data - DIGI-SUSTAIN 2026 (aligned with leadership reference)

export const patron = {
    name: 'Prof. S.N. Singh',
    designation: 'Patron',
    affiliation: 'ABV-IIITM Gwalior',
    email: null,
    image: IMG_PATRON,
};

export const conferenceChairs = [
    {
        name: 'Prof. Gaurav Agrawal',
        designation: 'Conference Chair',
        affiliation: 'ABV-IIITM Gwalior',
        email: 'gaurav@iiitm.ac.in',
        image: IMG_CHAIR_GAURAV,
    },
    {
        name: 'Dr. Manoj kumar Dash',
        designation: 'Conference Chair',
        affiliation: 'ABV-IIITM Gwalior',
        email: 'manojdash@iiitm.ac.in',
        image: IMG_CHAIR_MANOJ,
    },
];

export const coordinators = [
    {
        name: 'Dr. Chetanya Singh',
        designation: 'Conference Coordinator',
        affiliation: 'ABV-IIITM Gwalior',
        email: 'chetanya@iiitm.ac.in',
        image: IMG_COORD_CHETANYA,
    },
    {
        name: 'Mr. Shishir Srivastava',
        designation: 'Conference Coordinator',
        affiliation: 'ABV-IIITM Gwalior',
        email: 'shishir@iiitm.ac.in',
        image: IMG_COORD_SHISHIR,
    },
];

// Internal Advisory Board
export const advisoryBoardFirstLevel = [
    {
        name: 'Prof. Rajendra Sahu',
        affiliation: 'ABV-IIITM Gwalior',
        email: null,
        image: IMG_ADVISORY_RAJENDRA,
    },
    {
        name: 'Prof. Manoj Patwardhan',
        affiliation: 'ABV-IIITM Gwalior',
        email: null,
        image: IMG_ADVISORY_MANOJ,
    },
    {
        name: 'Dr. Arun Kumar',
        affiliation: 'ABV-IIITM Gwalior',
        email: null,
        image: IMG_ADVISORY_ARUN,
    },
];

// External Advisory Board
export const advisoryBoardSecondLevel = [
    {
        name: 'Prof. Anil Kumar',
        affiliation: 'London Metropolitan University',
        email: null,
        image: IMG_ADVISORY_EXT_ANIL,
    },
    {
        name: 'Prof. Satyabhusan Dash',
        affiliation: 'IIM Lucknow',
        email: null,
        image: IMG_ADVISORY_EXT_SATYABHUSAN,
    },
    {
        name: 'Prof. Prashant Gupta',
        affiliation: 'IIM Nagpur',
        email: null,
        image: IMG_ADVISORY_EXT_PRASHANT,
    },
];

// Editorial Board (all four in one list)
export const editorialBoardFirstLevel = [
    {
        name: 'Prof. Prashant Sharma',
        affiliation: 'O.P. Jindal Global University',
        email: null,
        image: IMG_EDITORIAL_PRASHANT,
    },
    {
        name: 'Dr. Rohit Kumar Singh',
        affiliation: 'IMI Kolkata',
        email: null,
        image: IMG_EDITORIAL_ROHIT,
    },
    {
        name: 'Dr. Jishnu Bhattacharyya',
        affiliation: 'Swansea University, UK',
        email: null,
        image: IMG_EDITORIAL_JISHNU,
    },
    {
        name: 'Dr. Sachin Modgil',
        affiliation: 'IMI Kolkata',
        email: null,
        image: IMG_EDITORIAL_SACHIN,
    },
];

// Unused if single Editorial Board; keep for backwards compatibility
export const editorialBoardSecondLevel = [];

export const contactPerson = {
    name: 'Mr. Shishir Srivastava',
    designation: 'Conference Coordinator',
    email: 'shishir@iiitm.ac.in',
    phones: ['+91 97925 00740', '+91 86976 71630'],
};
