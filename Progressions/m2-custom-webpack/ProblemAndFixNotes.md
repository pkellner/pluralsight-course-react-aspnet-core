# Problems and Fixes Notes (8/28/2018, video updates coming soon so this will not be needed)

01-Introducing  
02-Learn-The-JavaScript-Build-Tools  
03-Learn-to-Work-with-webpack  
04-Bring-in-React  
05-Adding-React-Router  
06-Updating-The-Example  
07-Why-you  
08-Splitting-the-WebPack-Config  
09-Implementing-serverside-Rendering  
10-Using-ReactDOM-renderToString  
11-Integrating-React-With-ASPNET 

## Video Improvements and Issues Coming (not done yet). Corrections fixed in GitHub Repo






03a - add at 02:07 for 6 seconds. add Before running the app (npm run start:dev), you may need to execute the command: “npm install webpack-cli -g”

03b - around 3 minutes, need to update index.html to have src=‘bundle.js’ and also run web pack to generate that bundle.js before running “npm run start:dev”.

03b -  The “path” npm module should be in dependencies, not top level of package.json

Revisions m2-clip3
  add at 02:07 for 6 seconds, new audio and video
  at 03:05 for 10 seconds, new video 
  at 03:18 to for 3 seconds, replace just video
  

---

04 - at 00:51, add below devtool in webpack.config.js mode: ‘development’ for better debugging experience

04 - at 01:36, version dependencies can get a little tricky.  At the time of the original release of this course, the current version of babel-loader was 7.  Now, (September 2018), babel-loader is at version 8 and that breaks our web pack config. To solve this, you should replace babel-loader with babel-loader@7 on the npm install command. Then, the webpack config works again.

npm install babel-core babel-loader@7 babel-preset-env babel-preset-react babel-preset-stage-2 react react-dom

04 - at 02:20, move JavaScript include to above closing body tag to make work

Revisions:
  at 0:45 to 1:30, video update
  at 1:37, insert 25 seconds new audio and visual
  at 3:16, 11 seconds, replace video only
  at 2:41, 10 seconds, replace video only
  

---

05a - at 0:27 insert 9 seconds.

05a - at 01:20, Before running with out new browser routes, we need to tell the webpack-dev-server to not return 404's on bad routes and simply execute the javascript.  We do this by adding to the webpack config devServer config, historyApiFallback: true.


Revisions:
  at 0:27, add 9 seconds
  at 1:19, add 19 seconds audio and video
  
---

06 - at 0:35, ...that will go at the bottom of all pages. <add/> If I were to just leave the Routes component as is here, I'd have a big problem because the new component CodeCampMenu {pause and show that}  contains LINK elements which must be children of a Router element.  Remembering, the Routes component {show that} we just refactored also has elements the must be children of a Router, Route elements that is.

  To solve this, we simply go up one level to client.js, and there, we add the Router and have it wrap essentially our FullPage component.  Then of course, we have to remove the Router element from our Routes component we created a minute ago.  That way, CodeCampMenu can have Routes in it, as well as our Routes component.  We do now have an app with lots more components then we did a minute ago, but we've done nothing to add complexity.  We've simply added more of the same type of components we had before and moved things around some. It's all very straight forward.

  At 1:00, should show just “bundle.js”, not “clientbundle.js”
  At 2:04, should not show action event for Route Not Found. That comes in later in SSR.
  
  
Revisions:
  
  at  0:35 12 1:37  insert audio and visual
  at 01:47 10 seconds - insert audio and visual  
  at 03:09 to end updated video only

---
08 -

Revisions:
  Add 9 seconds at 3:47 


---  


09 - at 0:27.  Because we’ve created a separate client webpack config, let’s change the output to clientbundle.js from just bundle.js.  if you’re coding along with me, make sure to also change the reference to clientbundle.js in the public/index.html file also.  Then later, you’ll wee when we work on webpack.server.js, we’ll create a different bundle called serverbundle.js.  Finally, make sure to update your package.json to make sure that start:dev executes the new webpack.client.js and not   the default webpack.config.js.

Revisions:
  at 0:27 for 5 seconds. Insert audio and video
  

---

 
10 - at 4:24 for 23 seconds.  For convenience, and to make this easier if you want to run this yourself, let’s add to our package.json file three commands.  Dev:build-server to bundle our client javascript, dev:build-server to bundle our server side javascript, and dev:server to run our server side bundle. Keep in mind that the node command may be different on different OS’s.  Sometimes it’s called node and sometimes it’s called nodedaemon.

Revisions:
  10 - at 4:24 for 23 seconds, add new audio and visual

---



Moved final react files back to course completion root


