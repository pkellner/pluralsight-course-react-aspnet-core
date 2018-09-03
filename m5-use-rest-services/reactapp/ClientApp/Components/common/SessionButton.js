import React, {Component} from 'react';
import PropTypes from 'prop-types';

const STATUS_DEFAULT = 0;
const STATUS_INTERESTED = 1;
const STATUS_ATTENDING = 2;
export const STATUS_ERROR = 999;
export const STATUS_SAVING = 998;

export default class SessionButton extends Component {

    toggleDropdown = () => {
        this.setState({isStatusListVisible: !this.state.isStatusListVisible});
    };

    swapStatus = () => {

        switch (this.props.sessionRec.interestLevel) {
            case STATUS_ATTENDING:
                this.props.onUpdate(
                    {...this.props.sessionRec,...{interestLevel: STATUS_DEFAULT}}
                );
                break;

            case STATUS_INTERESTED:
                this.props.onUpdate(
                    {...this.props.sessionRec,...{interestLevel: STATUS_ATTENDING}});
                break;

            case STATUS_DEFAULT:
                this.props.onUpdate(
                    {...this.props.sessionRec,...{interestLevel: STATUS_INTERESTED}});
                break;

            default:
                console.log("SessionButton:swapStatus:NoChange:interestLevel:" + this.props.interestLevel);
        }
    };


    handleStatusListCloseOnOutsideClick = event => {
        if (
            event.target !== this.dropdownContainer &&
            event.target.closest('.session-status-dropdown') !==
            this.dropdownContainer
        ) {
            this.hideStatusList();
        }
    };

    hideStatusList = () => {
        this.setState({isStatusListVisible: false});
    };

    setCurrentStatusOnClick = (event, currentStatus) => {
        event.preventDefault();
        this.hideStatusList();
        this.props.onStatusUpdate(currentStatus);
    };

    getCurrentStatusText = (interestLevel,isUpdating) => {
        if (isUpdating) {
            return 'Saving...';
        }

        switch (interestLevel) {
            case STATUS_DEFAULT:
                return 'Not Interested';
            case STATUS_INTERESTED:
                return 'Interested';
            case STATUS_ATTENDING:
                return 'Attending';
            case STATUS_ERROR:
                return 'ERROR UPDATING';
            case STATUS_SAVING:
                return 'SAVING.........';
            default:
                return '';
        }
    };

    state = {
        isStatusListVisible: false,
    };

    componentDidMount() {
        document.addEventListener(
            'click',
            this.handleStatusListCloseOnOutsideClick
        );
    }

    componentWillUnmount() {
        document.removeEventListener(
            'click',
            this.handleStatusListCloseOnOutsideClick
        );
    }

    render() {
        return (
            <div
                className={`${this.props.className
                    ? this.props.className
                    : ''} session-status-dropdown`}
                ref={dropdownContainer => {
                    this.dropdownContainer = dropdownContainer;
                }}
            >
                <div
                    className={`dropdown ${this.state.isStatusListVisible ? 'show' : ''}`}
                >
                    <div
                        className="btn btn-white btn-white--bordered dropdown-container"
                        id={`dropdownEventsJumboList${this.props.id}`}
                    >
                        <button
                            className={`dropdown__switcher ${this.props.sessionRec.interestLevel ===
                            STATUS_INTERESTED
                                ? 'dropdown__switcher--interested'
                                : ''} ${this.props.sessionRec.interestLevel === STATUS_ATTENDING
                                ? 'dropdown__switcher--registered'
                                : ''}`}
                            onClick={this.swapStatus}
                        >
                            {this.props.sessionRec.interestLevel === STATUS_ATTENDING && (
                                <i
                                    className="fa fa-check events-sessions-list__status-icon"
                                    aria-hidden="true"
                                />
                            )}
                            {this.props.sessionRec.interestLevel === STATUS_INTERESTED && (
                                <i
                                    className="fa fa-star-o events-sessions-list__status-icon"
                                    aria-hidden="true"
                                />
                            )}

                            {this.props.isUpdating === true && (
                                <span><i><b>{this.getCurrentStatusText(this.props.sessionRec.interestLevel,this.props.isUpdating || false)}</b></i></span>
                            )}
                            {this.props.isUpdating !== true && (
                                <span>{this.getCurrentStatusText(this.props.sessionRec.interestLevel,this.props.isUpdating || false)}</span>
                            )}
                        </button>
                        <button
                            className="dropdown__toggle-dropdown"
                            aria-haspopup="true"
                            aria-expanded={this.state.isStatusListVisible ? 'true' : 'false'}
                            onClick={this.toggleDropdown}
                        >
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                    </div>
                    <div
                        className="dropdown-menu"
                        aria-labelledby={`dropdownEventsJumboList${this.props.id}`}
                    >
                        <a
                            className="dropdown-item"
                            href=""
                            onClick={event =>
                                this.setCurrentStatusOnClick(event, STATUS_DEFAULT)}
                        >
                            Not Interested
                        </a>
                        <a
                            className="dropdown-item"
                            href=""
                            onClick={event =>
                                this.setCurrentStatusOnClick(event, STATUS_INTERESTED)}
                        >
                            Interested
                        </a>
                        <a
                            className="dropdown-item"
                            href=""
                            onClick={event =>
                                this.setCurrentStatusOnClick(event, STATUS_ATTENDING)}
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

SessionButton.propTypes = {
    sessionRec: PropTypes.object,
    className: PropTypes.string,
    onUpdate: PropTypes.func
};
