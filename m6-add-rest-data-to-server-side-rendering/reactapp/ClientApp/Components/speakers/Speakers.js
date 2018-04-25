import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SpeakersHeader from './SpeakersHeader';
import SpeakerList from './SpeakerList';
//import axios from 'axios';

import { connect } from 'react-redux';
import { speakersFetchData } from ".././../../redux/actions/speakers";

class Speakers extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true,
    //         appData: []
    //     };
    // }



    componentDidMount() {

        this.props.speakersFetchData();
        // axios.get('/data/speakers.json')
        //     .then((result)=> {
        //         this.setState({
        //             appData: result.data,
        //             isLoading: false
        //         });
        //     })
        //     .catch(error => {
        //         if (error.response) {
        //             console.log(error.responderEnd);
        //         }
        //     });
    }


    render() {

        if (this.props.isLoading) {
            return <span><div><SpeakersHeader/></div><i>Loading...</i></span>
        }
        else if (this.props.hasErrored) {
            return <span><b>Failed to load data: {this.props.errorMessage}</b></span>
        }
        else {
            return (
                <div>
                    <SpeakersHeader/>
                    <SpeakerList speakers={this.props.speakers} />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {

    return {
        speakers: state.speakers.data,
        hasErrored: state.speakers.hasErrored,
        isLoading: state.speakers.isLoading,
        errorMessage: state.speakers.errorMessage
    };
};


// this is returning a promise
function loadData(store) {
    return store.dispatch(speakersFetchData());
}
//https://shinesolutions.com/2017/12/14/putting-together-the-pieces-server-side-rendering-with-react-router-v4-and-redux/
// export default connect(mapStateToProps, { speakersFetchData })(Speakers)

export default {
    component: connect(mapStateToProps, { speakersFetchData })(Speakers),
    loadData
};