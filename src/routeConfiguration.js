import React from 'react';
import {
    LoginPage,
    ProfilePage,
    SignupPage,
} from './containers';
import Layout from './components/layout/Layout'

export default function routeConfiguration() {
    return [
        {
            name: 'SignupPage',
            path: '/signup',
            component: props => <SignupPage {...props} />
        },
        {
            name: 'LoginPage',
            path: '/login',
            component: props => <LoginPage {...props} />
        },
        {
            name: 'layout',
            path: '/',
            component: props => <Layout {...props} />,
            auth: true
        }
    ];
};