import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SpeakerListItem extends Component {

    render() {
        const img = () => {
            if (process.env.NODE_ENV === 'development') {
                return (
                    <img
                        src={`/${this.props.imageUrl}`}
                        alt="{this.props.firstName} {this.props.lastName}"
                    />
                );
            }
            return (
                <img src={this.props.imageUrl} alt="{this.props.firstName} {this.props.lastName}" />
            );
        };
        return (
            <div className="col-12 col-sm-6 speakers-list-item">
                <div className="events-speaker d-flex align-items-center">
                    <div className="events-speaker-photo">{img()}</div>
                    <div className="events-speaker-description">
                        <div className="name">
                            {this.props.firstName} {this.props.lastName}
                        </div>
                        <div className="profession">{this.props.company}</div>
                    </div>
                </div>
            </div>
        );
    }
}

SpeakerListItem.propTypes = {};SpeakerListItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    company: PropTypes.string,
    imageUrl: PropTypes.string,
};

SpeakerListItem.defaultProps = {};

export default SpeakerListItem;
