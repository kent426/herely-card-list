import React from 'react';
import { Component } from 'react';

import './app.scss';
import CardList from './card-list/card-list';


export default class App extends Component {
    render() {
        return (
            <div>
                <CardList />


            </div>
        );
    }
}