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

//https://shinesolutions.com/2017/12/14/putting-together-the-pieces-server-side-rendering-with-react-router-v4-and-redux/
export default connect(mapStateToProps,
    {sessionsFetchData,updateSession })(Home);








