import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import img1 from '../../assets/1.jpg'


import './space-card.scss'

//The single card component
class SpaceCard extends Component {
    render() {
  
      return (
        <div className='card'>
            {/* set the image by the passed in require('pathToImg') */}
            <img src={this.props.oneWorkSpace.imagePath} alt='space' className='card__img' />

            {/* titles in the center  */}
            <div className='card-title'>
                <p className='card-title--main' >{this.props.oneWorkSpace.name}</p>
                <p className= 'card-title--sub' >{this.props.oneWorkSpace.capacity} &bull; {this.props.oneWorkSpace.location}</p>
            </div>
            
            <span className='card-cap--top' >{this.props.oneWorkSpace.distance}</span>
            <span className='card-cap--bottom' >{this.props.oneWorkSpace.rate}</span>

          
        </div>
      );
    }
  }

export default SpaceCard;