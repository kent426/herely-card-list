import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import SpaceCard from '../space-card/space-card'


class CardList extends Component {
    renderList() {
        return this.props.workSpaces.map(onespace => {
            return (
                <SpaceCard oneWorkSpace={onespace} key={onespace.name} />
            )
        })
    }

    render() {
        return(
            this.renderList()
        )
    }
    

}

function mapStateToProps(state) {
return {
    workSpaces: state.workingspaces
};
}

export default connect(mapStateToProps)(CardList);

