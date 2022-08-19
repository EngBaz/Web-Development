# Project Structure
```
.
├── assets                  # contains images used for documentation
├── frontend                # HTML, CSS, JS
├── backend                 # webserver/REST API and Database
│   ├── webserver           # Node.js 
│   ├── database            # Database (MYSQL or MongoDB) 
```

# Getting Started

## Install and Configure Github Desktop
- Open your browser and navigate to: https://desktop.github.com/ 
- Download and install Github Desktop
- Open Github Desktop
- Click File => Options => Accounts 
- Click on "Sign in" => Continue with browser
- Sign in to Github in your browser
- When successfully logged in, Github Desktop will now be connected to your github account
- In Github Desktop, click on "File" => "Clone Repository"
- Search and find the project called "tonyawad88/practice-project" and click on "Clone" (Select your local folder where you want the project downloaded)
- This will download the code repository to your local computer

## Install and Configure Docker
Docker is a tool that helps you containerize your backend (database and/or webserver). Think of it as you put an object in a container and close the container. Whatever happens outside of that container doesn't affect it. E.g. if you run Node.js version 14 inside that container, and someone comes and installs Node.js 16 on your server/computer, it doesn't affect your app that is running in a container.
For this one we will use it to simplify setting up the database server.
- Open your browser and navigate to: https://docs.docker.com/desktop/install/windows-install/
- Click on "Docker Desktop for Windows" to download it
- When the download is complete, launch the installer to install Docker
- Once the installation is complete, launch Docker
    - Wait until Docker boots up
- Once it's booted, open your command prompt and type in these commands to test the installation:
    - `docker version` (it should return back some docker information)
    - `docker-compose version` (it should return back some docker-compose info and its version)
    - if it doesn't work, reboot and try again
- In command prompt, navigate to the "Practice-Project" directory you cloned using Github Desktop:
    - `cd C:\....\practice-project\backend\database`
    - `docker-compose up -d` (this will download the containerized version of mysql and start it for you)
- In the next steps we are going to connect to it and test it.

## Download MYSQL Workbench and Install it
- Open your browser and navigate to: https://dev.mysql.com/downloads/workbench/
- Click on "Download" to download the installer 
- On the next page click on "No thanks, just start my download."
- Once download, start the installer to install the MYSQL workbench
    - The workbench is used to help you design your database, connect to your server and deploy the database
- Once the installation is complete, launch "MYSQL Workbench" and move to the next section to test the connection to the server we launched using docker above.

## Testing Connection to the MYSQL database server
- Launch MYSQL Workbench
- In the top bar, look for "Database" => "Manage Connections"
- Click on "New"
- Type in a "Connection Name" => `MYSQL-on-Docker`
- Ensure the following settings are set:
    - Hostname: `127.0.0.1`
    - Port: `3306`
    - Username: `root`
- Now click "Test Connection"
- Enter the password: `MyRootPassword`
    - Add the checkmark next to "Save password in vault"
- Click "Ok"
- You should now see "Successfully made the MySQL connection"
- Click on "Close"
- Now in the middle of the MYSQL Workbench window you should see "Rescan servers", click on it
    - It should now show the connection we added above "MYSQL-on-Docker"
    - Double click on it (re-enter password if it asks you)
    - You should now be connected to the server
    - Click on "Server Status" to see a similar screen to the one below.
![DB](./assets/db-connection.png)

## Explore MYSQL Workbench Schema
- Launch MYSQL Workbench
- In the top bar, click on "Edit" => "Preferences"
- Look for "Modeling" and click on it
- Put a checkmark next to "Force use of software based rendering..."
- Under "Modeling" as well, select "MYSQL"
- Set the "Default Target MySQL version to: `5.7.39`
- Click "OK"
- Now click on "File" => "Open Model" and navigate to "C:\...\practice-project\backend\database\MYSQL-DB-Model.mwb"
- You should see 5 tables, click on "EER Diagram" to explore the below diagram.
    - The system we will be building is for a mini market. We have users that sign in and order groceries.
![DB-Diagram](./assets/my-store-db.png) 

## Deploy Database Schema to MYSQL Server
- Make sure you have the model file opened
    -  "File" => "Open Model" and navigate to "C:\...\practice-project\backend\database\MYSQL-DB-Model.mwb"
- In the top bar, click on "Database" => "Forward Engineer"
- Select the connection we created "MYSQL-on-Docker"
- Click Next
- Look for "Generate INSERT statements for tables" and put a checkmark next to it
- Look for "DROP objects before each CREATE object" and put a checkmark next to it
- Look for "Include model attached scripts" and put a chekcmark next to it
- Click Next => Next => Next
- Verify that "Forward Engineer Finished Successfully"
- Click "Close"
- Now the model / schema of the database is deployed to the server

## Connect to Server and explore database:
- Launch MYSQL Workbench
- Double click on "MYSQL-on-Docker" connection to connect to database server
- On the left hand side, select "Schemas" so you can see "my_store" datbase
- Expand "my_store" => "Tables" and you should see all the tables (inventory, items, etc)
- Right click on "users" table and click on "Select Rows - Limit 1000"
- Database is pre-populated with some records
![DB-Deployed](./assets/db-deployed.png) 


## Install and Configure Backend (Node.js)
- Work in progress to build REST API
    - Login
    - Get Inventory

## Front-end Design
### Login Page:
![Login Page](./assets/login.png)
or
![Login Page2](./assets/login-2.png)
### Dashboard:
- Retrieve list of items from backend

![Dashboard](./assets/dashboard-1.png)


