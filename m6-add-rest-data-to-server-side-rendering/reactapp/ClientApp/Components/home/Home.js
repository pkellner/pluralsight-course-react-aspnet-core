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

// this is returning a promise
function loadData(store) {
    // wait for both retrieves to finish when server side renderings
    const prom2 = store.dispatch(speakersFetchData());
    const prom1 = store.dispatch(sessionsFetchData());
    return Promise.all([prom1,prom2]);
}

const mapStateToProps = (state) => {
    return {
        sessions: state.sessions.data,
        hasErrored: state.sessions.hasErrored,
        isLoading: state.sessions.isLoading,
        errorMessage: state.sessions.errorMessage
    };
};

//https://shinesolutions.com/2017/12/14/putting-together-the-pieces-server-side-rendering-with-react-router-v4-and-redux/
export default {
    component: connect(mapStateToProps,
        {sessionsFetchData,speakersFetchData,updateSession })(Home),
    loadData
};










// import React, {Component} from 'react';
//
// import PropTypes from 'prop-types';
// import HomeHeader from './HomeHeader';
// import HomeContainer from './HomeContainer';
// import { connect } from 'react-redux';
//
// import { sessionsFetchData } from ".././../../redux/actions/sessions";
// import { speakersFetchData } from ".././../../redux/actions/speakers";
//
// import {updateSession} from "../../../redux/actions/sessions";
//
// class Home extends Component {
//
//     componentDidMount() {
//         // this makes available on successful load both sessions and sessionattendee data
//         // in state to all components in this tree
//         // this.props.sessionAttendeeFetchData();
//         this.props.sessionsFetchData();
//     }
//
//     updateSession(rec) {
//         this.props.updateSession(rec);
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <HomeHeader />
//                 <HomeContainer
//                     isLoading={this.props.isLoading}
//                     sessions={this.props.sessions}
//                     updateSession={(rec) => {
//                         this.props.updateSession(rec);
//                     }} />
//             </div>
//         );
//     }
// }
//
// Home.propTypes = {
//     notify: PropTypes.func,
// };
//
// // this is returning a promise
//
//
// const mapStateToProps = (state) => {
//     return {
//         sessions: state.sessions.data,
//         hasErrored: state.sessions.hasErrored,
//         isLoading: state.sessions.isLoading,
//         errorMessage: state.sessions.errorMessage
//     };
// };
//
// function loadData(store) {
//     // wait for both retrieves to finish when server side renderings
//     const prom2 = store.dispatch(speakersFetchData());
//     const prom1 = store.dispatch(sessionsFetchData());
//     return Promise.all([prom1,prom2]);
// }
//
// export default {
//     component: connect(mapStateToProps,
//         {sessionsFetchData,speakersFetchData,updateSession })(Home),
//     loadData
// };
//
//
//
//
//
//
//
//
