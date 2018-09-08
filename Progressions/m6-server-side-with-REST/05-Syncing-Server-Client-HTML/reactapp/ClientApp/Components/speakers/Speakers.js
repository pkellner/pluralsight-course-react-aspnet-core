import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SpeakersHeader from './SpeakersHeader';
import SpeakerList from './SpeakerList';
//import axios from 'axios';

import { connect } from 'react-redux';
import { speakersFetchData } from ".././../../redux/actions/speakers";

class Speakers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: []
        };
    }



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
            return <span><i>Loading...</i></span>
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

        // if (this.state.isLoading) {
        //     return <span><i>Loading...</i></span>
        // }
        // else {
        //     return (
        //         <div>
        //             <SpeakersHeader/>
        //             <SpeakerList speakers={this.state.appData} />
        //             {/*<span>{JSON.stringify(this.state.appData)}</span>*/}
        //         </div>
        //     );
        // }
    }
}

Speakers.propTypes = {};
Speakers.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        speakers: state.speakers.data,
        hasErrored: state.speakers.hasErrored,
        isLoading: state.speakers.isLoading,
        errorMessage: state.speakers.errorMessage
    };
};

// export default connect(mapStateToProps,
//     { speakersFetchData })(Speakers)


// this is returning a promise
function loadData(store) {
    return store.dispatch(speakersFetchData());
}

export default {
    component: connect(mapStateToProps, { speakersFetchData })(Speakers),
    loadData
};

