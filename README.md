# Postlight Project -- Employee Directory

I built this project using Django and React. They're the two frameworks I'm most familiar with and I figured I might as well stick to what I know. I used [randomuser.me](randomuser.me) to seed my database. Django acts both webserver and API server.

## Features

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

## Where to go next

- I'd love to include more animations
  -I had one idea that the modals or even the EmployeePage could slide out
  -Loading spinners would be a nice touch, too
- Testing
  -I'm not great with testing; it's something I'd love to learn more about but I did not feel confident enough to include them in a project like this
- Because I was rushing, I didn't have to perfect my models and therefore the API the way I would have liked. I would have included validations, proper ImageFields, a create endpoint/form