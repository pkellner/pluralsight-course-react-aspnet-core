# Problems and Fixes Notes (8/29/2018, video updates coming soon so this will not be needed)

01-Introducing  
02-Implementing-Axios  
03-Create-Redux  
04-More-Redux  
05-Redux-Actions-Updates  
06-Debugging-Redux  
07-JSON-server  
08-REST-Updates-PUT  
09-Adding-Sessions  

*Currently working through corrections. Completed through clip 07 as of 9/1/2018.  Expect more over the weekend.*  

10-Axios-Getting-Data  
11-Decouple-React-From-Core  
12-Adding-Middeware  
  
## Video Improvements and Issues Coming (not done yet). Corrections fixed in GitHub Repo

m5-04 - at 0:00 , Show state that includes initialization of state array to [....]. no voice change needed.  Without the initial state, when running later, we get errors before the state is loaded and render runs.

m5-05 - Forgot to Install redux packages.  at 03:35 ... "Before we can run this app, we need to install some node packages. Specifically, we need to install redux react-redux redux-axios-middleware and redux-thunk .. now when...

m5-06 - at 1:35 show import to include "import { composeWithDevTools } from 'redux-devtools-extension';"

m5-07 - at 2:19 remove -g option so that json-server gets added to packages.json (no audio change)

m5-07 - at 3:24 ...at the same time as the webpack dev server.... "we will use the npm package npm-run-all which we must install by typing npm install npm-run-all"

m5-07 - at 3:41 ... leave npm start on screen longer

m5-09 - at 0:31 ... In addition, we need to update our home component to fetch the data using our new sessionsFetchData redux method. THis is basically the same code pattern we explained earlier for retrieving speakers data with redux.  We also have here an update session method which gets called from our child component we were just looking at, HomeContainer.


