import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SpaceCard from '../space-card/space-card';

//use the SpaceCard Component and render them as a list according to the redux static data
class CardList extends Component {
    //the list
    renderList() {
        return this.props.workSpaces.map(onespace => {
            return (
                <SpaceCard oneWorkSpace={onespace} key={onespace.name} />
            );
        });
    }

    render() {
        //render the list
        return(
            this.renderList()
        );
    }
    

}

CardList.propTypes =  {
    workSpaces: PropTypes.array
};

function mapStateToProps(state) {
    return {
        workSpaces: state.workingspaces
    };
}

export default connect(mapStateToProps)(CardList);

