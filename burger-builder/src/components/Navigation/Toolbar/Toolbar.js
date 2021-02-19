import React from 'react';
import Style from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = props => (
    <header className={Style.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav><NavigationItems /></nav>
    </header>
);

export default toolbar;