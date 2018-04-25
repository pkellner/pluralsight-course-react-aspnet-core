import React from 'react';
import HomeSessionCount from './HomeSessionCount';
import HomeSessionFilter from './HomeSessionFilter';
import HomeFilterView from './HomeFilterView';
import HomeSessions from './HomeSessions';

export default function HomeContainer(props) {

    if (props.isLoading){
        return (
            <div><i>...Loading</i></div>
        );
    }
    else {
        return (
            <div className="container-main events">
                <div className="row">
                    <div className="col-12">
                        <HomeSessionCount/>
                        <HomeSessionFilter/>
                        <HomeFilterView/>
                        <HomeSessions sessions={props.sessions}
                                      updateSession={(rec) => {
                                          return props.updateSession(rec);
                                      }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
