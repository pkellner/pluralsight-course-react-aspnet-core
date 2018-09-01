import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SpeakersHeader from './SpeakersHeader';
import SpeakerList from './SpeakerList';
import axios from 'axios';

class Speakers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            appData: []
        };
    }


    componentDidMount() {
        axios.get('/data/speakers.json')
            .then((result)=> {
                this.setState({
                    appData: result.data,
                    isLoading: false
                });
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.responderEnd);
                }
            });
    }


    render() {

        if (this.state.isLoading) {
            return <span><i>Loading...</i></span>
        }
        else {
            return (
                <div>
                    <SpeakersHeader/>
                    <SpeakerList speakers={this.state.appData} />
                    {/*<span>{JSON.stringify(this.state.appData)}</span>*/}
                </div>
            );
        }
    }
}

Speakers.propTypes = {};
Speakers.defaultProps = {};

export default Speakers;