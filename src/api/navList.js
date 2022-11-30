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
                name: 'Contacts',
                link: '/company/contacts'
            },
        ]
    },
    {
        name: 'Support',
        link: '/support',
        ul: null
    }
]

export default navList