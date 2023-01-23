const navList = [
    {
        name: 'Home',
        link: '/',
        ul: null
    },
    {
        name: 'About',
        link: '/about',
        ul: null
    },
    {
        name: 'Portfolio',
        link: '/portfolio',
        ul: null
    },
    // {
    //     name: 'Functional',
    //     link: '/functional',
    //     ul: null
    // },
    {
        name: 'Company',
        link: '/company',
        ul: [
            {
                name: 'About us',
                link: '/company/#about'
            },
            // {
            //     name: 'Partners',
            //     link: '/company/partners'
            // },
            {
                name: 'Support',
                link: '/company/support',
            },
        ]
    },
    {
        name: 'Contacts',
        link: '/contacts',
        ul: null
    }
]

export default navList