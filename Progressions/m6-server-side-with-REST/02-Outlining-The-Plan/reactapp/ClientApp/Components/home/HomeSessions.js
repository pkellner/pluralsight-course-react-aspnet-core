import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EventSessionRec from '../common/EventSessionRec';
import SessionButton from '../common/SessionButton';

class HomeSessions extends Component {

    updateSession = (rec) => {
        return this.props.updateSession(rec);
    }

    render() {



        const sessionItemComponents = this.props.sessions.map(sessionRec => {

            return <EventSessionRec
                key={sessionRec.id}
                title={sessionRec.title}
                speakersNamesCsv={sessionRec.speakersNamesCsv} >
                <SessionButton
                    className="item col-12 col-sm-6 col-md-3"
                    sessionRec={sessionRec}
                    sessionId={sessionRec.id}  // rec goes down
                    onUpdate={(rec) => {
                        return this.props.updateSession(rec);  // rec goes up
                    }}
                />
            </EventSessionRec>;
        });

        return (
            <div className="events-sessions-list container-fluid js-list-view active">
                {sessionItemComponents}
            </div>
        );
    }
};

HomeSessions.propTypes = {
    updateSessionAttendee: PropTypes.func,
    sessions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            title: PropTypes.string,
            author: PropTypes.string,
            date: PropTypes.string,
            twitter: PropTypes.string,
            facebook: PropTypes.string,
            linkedin: PropTypes.string,
            googleplus: PropTypes.string,
            avatar: PropTypes.string,
            proffesion: PropTypes.string,
            status: PropTypes.string,
            isUpdating: PropTypes.bool,
        })
    ),
};

export default HomeSessions;
