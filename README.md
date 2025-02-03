# NexusUI

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



-Launch instance
-chmod 400 <secret>.pem
-ssh -i "Nexus-secret.pem" ubuntu@ec2-13-61-34-133.eu-north-1.compute.amazonaws.com
-install node version 18.20.0
git clone on that ubuntu machine
    -frontend
        -npm install ->dependencies install
        -npm run build 
        -sudo apt update
        -sudo apt install nginix
        -sudo systemctl enable nginix
        -copy code from dist(build files) to /var/www/html/
        -sudo scp -r dist/* /var/www/html/
        -Enable port :80 of your instance 

    -backend
        -allowed ec2 instance public IP on mongodb server
        -npm install pm2 -g
        -pm2 start npm --name "Nexus" -- start
        -pm2 logs
        -pm2 list,pm2 flush <name> ,pm2 stop <name> ,pm2 delete <name>
        -config nginx - /etc/nginx/sites-available/default
        -restart nginx -sudo systemctl restart nginx

        Frontend => http://13.60.52.94/
        Backend => http://13.60.52.94/7777

        Domain name = Nexus.com => 13.60.52.94

         Frontend => Nexus.com
        Backend => Nexus.com/7777 =>Nexus.com/api

        nginx config :

        server_name  13.60.52.94;

         location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }


        