
<a name="top"></a>

<h1 align="center">
  <br>🦷 Dental Clinic Frontend 🦷
</h1>

---

- [About](#about)   

- [Instructions](#instructions)

- [Screenshots](#images)

- [Tools](#tools)

- [Developers](#developers)

---
<a name="about"></a>
## About :speech_balloon:

Challenge from the Fullstack Developer Bootcamp at <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> where we have to create the frontend for a dental clinic.

The purpose of this design is to recreate the frontend part of our Dental Clinic. 

In this website you could register as a dentist or as a client and then login or logout. 

If you are a dentist you could see your profile, find all the active clinics, view your schedule in the last month or update your information. 

If you are a client you could view all dentists and clinics, create a new appointment, modify or delete it and finally you could also modify your personal information if you need.

This Project has been done by [José Luis Aparicio](https://github.com/ApcarJo), [Alejandro Urbina](https://github.com/2020-JAUG) and [Adriana Fayos](https://github.com/AdrianaFayos). 

Starting date: June 8th 2021. <br>
Due date: June 20th 2021.

We have used the Trello in order to share the tasks and to have a better organization.

<a name="instructions"></a> 
## Instructions :clipboard: 

The first step is to clone the repository and install the project dependencies.

### `npm i`

Run the server.

### `npm start`

<br>

On the other side, you will need to clone the backend from [this repository](https://github.com/2020-JAUG/Backend-Dental-Clinic.git) and follow its instructions to run it.

<a name="images"></a>
## Screenshots 📸

Home

<img src="src/img/screenshots/home.png" width="1000">

Login

<img src="src/img/screenshots/login.png" width="1000">

Client profile with our OWN CODE for a INFINITE LOOP SLIDER.

<img src="src/img/screenshots/clientProfile.png" width="1000">

Create new appointment

<img src="src/img/screenshots/createAppointment.png" width="1000">

As a dentist, check your dynamic schedule that updates all the info and shows in real time the appointments of each month, this is not a library, is pure javascript react redux code.

<img src="src/img/screenshots/schedule_datepicker.jpg" width="1000">

This is our DATEPICKER PURE JAVASCRIPT CODE created for the project. It's a component that uses redux to send the data to each container where is used (clientregister.jsx, dentistregister.jsx, and dentistprofile.jsx container views). It can show the months by name, write the year in roman numerals, and some other calculations related to the date, this options are in the code but not activated for the project. Part of the code is used to create the dynamic schedule draw in dentist profile.

<img src="src/img/screenshots/purecode_datepicker.PNG" width="1000">

Update your profile

<img src="src/img/screenshots/updateDentist.PNG" width="1000">

Check your appointments history

<img src="src/img/screenshots/HistoryApp.PNG" width="1000">

Register with our new bran datepicker and our smooth MODERN CSS ANIMATION for the inputs

<img src="src/img/screenshots/registerClient.PNG" width="1000">

<a name="tools"></a>
## Tools 🔧


<img src="src/img/javascript.png" width="50"> <img src="src/img/html5.png" width="50"> <img src="src/img/css3.png" width="50"> <img src="src/img/react.png" width="50"> <img src="src/img/redux.png" width="55"> <img src="src/img/node.png" width="65"> <img src="src/img/trello.png" width="60">

Installed dependencies: Redux, React-redux, Redux-localstorage-simple, Nodemon, React-Router-Dom, Moment & Axios.

<a name="developers"></a>

## Developers ✍️

[José Luis Aparicio](https://github.com/ApcarJo) 

[Alejandro Urbina](https://github.com/2020-JAUG)

[Adriana Fayos](https://github.com/AdrianaFayos)


---

Thanks to all our classmates for the help and work as a great team.

Things we runned out of time to implement:
- Dentist management of their availability in "isActive" option and how this affect the view of the clients of the list of dentist.
- Client filter dentist over specialty.
- Register mail confirmation througth "node mailer"
- Improved the behaviour of the dentistprofile schedule view and interact with the appointments in the schedule


[🔝](#top)
