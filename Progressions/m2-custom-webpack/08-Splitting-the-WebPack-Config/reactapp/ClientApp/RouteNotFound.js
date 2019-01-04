import React, {Component} from 'react';
import { Route } from 'react-router-dom';



class RouteNotFound extends Component {

    componentDidMount() {
        this.props.action(true);
    }

    render() {
        console.log('route not found in RouteNotFound.js.  Bubble up...');
        //this.props.action(false);
        return (
            <Route render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.status = 404;
                }
                return (
                    <div>
                        <h1>404 : Not Found!</h1>
                    </div>
                )
            }}/>
        );
    }
}

RouteNotFound.defaultProps = {};

export default RouteNotFound;

// 1/4/2019: NOTE
// I'M LEAVING THE BELOW CODE IN COMMENTED OUT JUST TO MAKE IT EXTRA CLEAR THAT THIS WAS THE CODE
// BEFORE THE 1/4/2019 UPDATED AND THE NEW CODE ABOVE REPLACES IT.
// THANKS GO TO @PATRICKWEEGAN FOR REPORTING THE ISSUE
// https://github.com/pkellner/pluralsight-course-react-aspnet-core/issues/3
// I DON'T LIKE LEAVING IN COMMENTED CODE, BUT IN THIS CASE, I THINK IT IS HELPFUL TO AVOID CONFUSION IF SOMEONE HAS
// OLD CODE AROUND AND DOES NOT REALIZE IT WAS UPDATED. THIS MAKES IT EXTRA CLEAR -PETER KELLNER
//

// import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
//
// class RouteNotFound extends Component {
//     render() {
//         return (
//             <Route render={() => {
//                 return (
//                     <div>
//                         <h1>404 : Not Found!</h1>
//                     </div>
//                 )
//             }}/>
//         );
//     }
// }
//
// RouteNotFound.defaultProps = {};
//
// export default RouteNotFound;

