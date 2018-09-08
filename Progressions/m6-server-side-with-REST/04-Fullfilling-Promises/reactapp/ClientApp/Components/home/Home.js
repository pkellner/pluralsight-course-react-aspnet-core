import React, {Component} from 'react';

import PropTypes from 'prop-types';
import HomeHeader from './HomeHeader';
import HomeContainer from './HomeContainer';
import { connect } from 'react-redux';

import { sessionsFetchData } from ".././../../redux/actions/sessions";
import { speakersFetchData } from ".././../../redux/actions/speakers";

import {updateSession} from "../../../redux/actions/sessions";

class Home extends Component {

    componentDidMount() {
        this.props.sessionsFetchData();
    }

    updateSession(rec) {
        this.props.updateSession(rec);
    }

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeContainer
                    sessions={this.props.sessions}
                    updateSession={(rec) => {
                        this.props.updateSession(rec);
                    }} />
            </div>
        );
    }
}

Home.propTypes = {
    notify: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        sessions: state.sessions.data,
        hasErrored: state.sessions.hasErrored,
        isLoading: state.sessions.isLoading,
        errorMessage: state.sessions.errorMessage
    };
};

function loadData(store) {
    // wait for both retrieves to finish when server side renderings
    const prom2 = store.dispatch(speakersFetchData());
    const prom1 = store.dispatch(sessionsFetchData());
    return Promise.all([prom1,prom2]);
}

// export default connect(mapStateToProps,
//     {sessionsFetchData,updateSession })(Home);

export default {
    component: connect(mapStateToProps,
        {sessionsFetchData,speakersFetchData,updateSession })(Home),
    loadData
};








