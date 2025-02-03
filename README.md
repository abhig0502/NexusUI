# DevTinder

-create a vite + react application
-remove uneccessary code and create a hello world app
-install tailwindcss
-install daisyui
-Add  NavBar component to App.jsx
-create a Navbar.jsx seperate component file
-install react-router-dom
-create BrowserRouter > Routes > Route=/ Body > RouteChildren
-create an outlet in your Body component 
-create a footer
-create a login page
-Install axios 
-CORS-install cors in backend=>add middleware to app with configration :origin,credentials:true
-whenever you are making an api call so pass axios => {withCredentials :true} (if you not pass this you will not get the token token back you will not be able to pass the token back )
-install react redux + @reactjs/toolkit => configureStore => Provider =>createSlice =>add reducer to store  
-add redux dev tools extention in chrome 
-login and check whether you data is coming properly of not 
-navbar should update as soon as user logs in 
-refactor your code to add contants file + create components folder 
-you should not be able to access any other routes without login
-if token is not present redirect it to login page
-logout feature 
-get the feed and add the feed in the store 
-build the user card on feed 
-edit profile feature (unable to call the api check it !!!!!)
-show toast message on save of profile
-New page -see all connections
-New page -see all connection requests
-feature -accept/reject connection requests

remaining :
-send/ignore the user card from the feed 
-Signup new user
-E2E testing


Body
    NavBar 
    Route=/ => feed
    Route=/login => Login
    Route=/connections => connections
    Route=/profile => profile



    -->you need to get the authentication state so that after login you won't be able to go back to the login page 
       for reference use useauth hook take help from netflixGPT (do it later)
