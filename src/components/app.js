import React from "react";
import { Component } from "react";

import './app.scss'

import SpaceCard from './space-card/space-card'
import CardList from './card-list/card-list'


export default class App extends Component {
    render() {
      return (
        <div>
            <CardList />


        </div>
      );
    }
  }