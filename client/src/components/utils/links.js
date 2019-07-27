const regularLink = [
    { link: '/user/dashboard', title: 'overview', exact: true },
    { link: '/user/dashboard/account', title: 'account settings', exact: true },
    { link: '/user/dashboard/cart', title: 'cart', exact: true },
    { link: '/user/dashboard/order', title: 'order', exact: true },
]

const adminLink = [
    { link: '/user/dashboard/lookbook', title: 'lookbook', exact: true },
    { link: '/user/dashboard/products', title: 'products', exact: true },
    { link: '/user/dashboard/sales', title: 'sales', exact: true },
    { link: '/user/dashboard/promotion', title: 'promotion', exact: true },
    { link: '/user/dashboard/settings', title: 'settings', exact: true },
    { link: '/user/dashboard/users', title: 'users', exact: true },
]

const globalLink = [
    { link: '/', title: 'home', exact: true },
    { link: '/product', title: 'all products', exact: true },
    { link: '/lookbook', title: 'lookbook', exact: true },
    { link: '/campaign', title: 'campaign', exact: true },
    { link: '/sale', title: 'sale', exact: true }
]

const companyLink = [
    { link: '/about', title: 'about satchel', exact: true },
    { link: '/contact', title: 'contact', exact: true },
    { link: '/careers', title: 'careers', exact: true },
    { link: '/terms-conditions', title: 'terms & conditions', exact: true },
]

export { regularLink, adminLink, globalLink, companyLink }