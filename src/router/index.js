import React from "react";

// Importing All Pages
const DoctorsPage = React.lazy(() => import('../components/DoctorsPage'))
const DoctorPage = React.lazy(() => import('../components/DoctorPage'))
const NotFound = React.lazy(() => import('../components/shared/NotFound'))

// App Routes
const routes = [
    {
        path: '/',
        exact: true,
        component: DoctorsPage
    },
    {
        path: '/doctors/:id',
        exact: true,
        component: DoctorPage
    },
    {
        path: '*',
        exact: true,
        component: NotFound
    },
]

export default routes