import React, {Component} from 'react';
//import PropTypes from 'prop-types';



class SpeakerDetailOne extends Component {
    render() {
        return (
            <div>SpeakerDetailOne:name:{this.props.name}</div>
        );
    }
}

//SpeakerDetailOne.propTypes = {};
SpeakerDetailOne.defaultProps = {};

export default SpeakerDetailOne;
