# Problems and Fixes Notes (in progress as of 8/28/2018)

01-Introducing
02-Learn-The-JavaScript-Build-Tools
03-Learn-to-Work-with-webpack
04-Bring-in-React
05-Adding-React-Router
06-Updating-The-Example

Updates in Progress as of 8/28/2018, 01-06 directories in place. Below updates coming

07-Why-you
08-Splitting-the-WebPack-Config
09-Implementing-serverside-Rendering
10-Using-ReactDOM-renderToString
11-Integrating-React-With-ASPNET

Video Suggestions and Issues

03a - Before running the app (npm run start:dev), you may need to execute the command: “npm install webpack-cli”

03b - around 3 minutes, need to update index.html to have src=‘bundle.js’ and also run web pack to generate that bundle.js before running “npm run start:dev”.

03b -  The “path” npm module should be in dependencies, not top level of package.json

04 - at 00:51, add below devtool in webpack.config.js mode: ‘development’ for better debugging experience

04 - at 01:36, version dependencies can get a little tricky.  At the time of the original release of this course, the current version of babel-loader was 7.  Now, (August 2018), babel-load is at version 8 and that breaks our web pack config. To solve this, you should add @7 to the npm install command, and then the webpack config works again.
npm install babel-core babel-loader@7 babel-preset-env babel-preset-react babel-preset-stage-2 react react-dom

04 - at 02:20, move JavaScript include to above closing body tag to make work

05a - at 01:20, Before running with out new browser routes, we need to tell the webpack-dev-server to not return 404's on bad routes and simply execute the javascript.  We do this by adding to the webpack config devServer config, historyApiFallback: true.
05b - just last step refactor to remove Router from FullPage component to separate Routes.js (no video change needed)

06 - at 0:35, ...that will go at the bottom of all pages. <add/> If I were to just leave the Routes component as is here, I'd have a big problem because the new component CodeCampMenu {pause and show that}  contains LINK elements which must be children of a Router element.  Remembering, the Routes component {show that} we just refactored also has elements the must be children of a Router, Route elements that is.

  To solve this, we simply go up one level to client.js, and there, we add the Router and have it wrap essentially our FullPage component.  Then of course, we have to remove the Router element from our Routes component we created a minute ago.  That way, CodeCampMenu can have Routes in it, as well as our Routes component.  We do now have an app with lots more components then we did a minute ago, but we've done nothing to add complexity.  We've simply added more of the same type of components we had before and moved things around some. It's all very straight forward.





