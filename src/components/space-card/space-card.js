import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import img1 from '../../assets/1.jpg'


import './space-card.scss'

class SpaceCard extends Component {
    render() {
  
      return (
        <div className='card'>
            <img src={this.props.oneWorkSpace.imagePath} alt='space' className='card__img img-fluid' />
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
  
//   function mapStateToProps(state) {
//     return {
//      oneWorkSpace: state.workingspaces[0]
//     };
//   }
  
//   export default connect(mapStateToProps)(SpaceCard);