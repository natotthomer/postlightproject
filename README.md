# Postlight Project -- Employee Directory

I built this project using Django and React. They're the two frameworks I'm most familiar with and I figured I might as well stick to what I know. I used [randomuser.me](randomuser.me) to seed my database. Django acts both webserver and API server.

Features include:

-Update and Delete Employee functions
-Pagination
-Sorting
-Search
-React Router for frontend routing
-CSS animations for messaging
-simple API

## To Install

This assumes that NPM and Python3 & virtualenv are installed locally

After cloning the repo, `cd` into the folder and perform the following commands:

- `virtualenv -p python3 venv`
- `source venv/bin/activate`
- `pip install -r requirements.txt`
- `python manage.py migrate`
- `python manage.py seed`
- `python manage.py runserver`

In another terminal window:

- `npm install`
- `webpack -w`

Navigate the browser to `localhost:8000`!