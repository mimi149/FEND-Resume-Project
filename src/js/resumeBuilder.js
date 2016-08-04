"use strict";
var bio = {
    name: "Mimi Nguyen",
    role: "Software Engineer",
    contacts: {
        mobile: "714-276-4033",
        email: "149baotran@gmail.com",
        github: "https://github.com/mimi149",
        linkedIn: "https://www.linkedin.com/in/miminguyencs",
        location: "Fountain Valley"
    },
    welcomeMessage: "Hi! I'm Mimi, I love learning, coding. and yoga.",
    skills: ["C++", "Python", "JavaScript", "Linux", "PostgresSQL"],
    biopic: "images/baotran.jpg",
    display: function() {
        var data="%data%", formattedName, formattedRole, formattedMobile, formattedEmail, formattedGithub,
        formattedLinkedIn, formattedLocation, formattedBioPic, formattedWelcomeMsg;

        formattedName = HTMLheaderName.replace(data, bio.name);
        formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        formattedLinkedIn = HTMLLinkedIn.replace(data, bio.contacts.linkedIn);
        formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLinkedIn + formattedLocation);

        formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(element) {
            var formattedSkill = HTMLskills.replace(data, element);
            $("#skills").append(formattedSkill);
        });
        $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLinkedIn + formattedLocation);
    }
};

var projects = {
    projects: [{
        "title": "Conference Organization App",
        "dates": "08/2015",
        "url": "https://github.com/mimi149/p3_Conference_App.git",
        "description": "Built with Python/Flask, SQLAlchemy, PostgreSQL, jQuery, HTML, CSS, Bootstrap; authenticate using OAuth.<br>" +
            "Help facilitating conference registration and authentication processes fot pafticipants.<br>" +
            "Authenticated users have the ability to post, edit, and delete their own items.<br>" +
            "Users can upload/download documents related to the sessions and mard/unmark their favorite sesions.",
        "images": ["images/conference_project-640.png"]
    }, {
        "title": "Cloud-based API server",
        "dates": "07/2015",
        "url": "https://github.com/mimi149/p4_Conference_APIs.git",
        "description": "Built with Google App Engine, Google NDB Datastore, and Google Cloud Endpoints.<br>" +
            "Focused on using Google Cloud Platform to develop a scalable web app.<br>" +
            "Helps organizing conferences and sessions.<br>" +
            "Supported features: user authentication, create and update conferences, create sessions (only by the organizer of the conference),<br>" +
            "register and mark, query by a variety of filters.",
        "images": ["images/API_project-640.png"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(element) {
            var url="%url%", data="%data%", formattedprojectTitle, formattedprojectDates, formattedprojectDescription;
            formattedprojectTitle = HTMLprojectTitle.replace(data, element.title);
            formattedprojectTitle = formattedprojectTitle.replace(url, element.url);
            formattedprojectDates = HTMLprojectDates.replace(data, element.dates);
            formattedprojectDescription = HTMLprojectDescription.replace(data, element.description);
            $(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + formattedprojectDescription);

            element.images.forEach(function(element) {
                var formattedImage = HTMLprojectImage.replace(data, element);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

var work = {
    jobs: [{
        "employer": "Voluware Inc.",
        "title": "Software Engineer",
        "url": "http://voluware.com",
        "location": "Huntington Beach",
        "dates": "11/2015 - 04/2016",
        "description": "Write automated test program for web application.<br>" +
            "Develop web application."
    }, {
        "employer": "Hochiminh city University of Technology",
        "title": "Professor",
        "url": "http://www.hcmut.edu.vn/en/",
        "location": "Vietnam",
        "dates": "1996 - 2013",
        "description": "Designed and taught courses in algorithms, data structures and database systems.<br>" +
            "Researched relational and object oriented databases.<br>" +
            "Designed database for many applications and involved in some projects at the University.<br>" +
            "Coached university's student teams who participated in regional and international ACM-ICPC " +
            "(Association of Computing Machinery - International Collegiate Programming Contest) for 7 years.<br>" +
            "Advised more than 15 students on their graduation theses every year."
    }, {
        "employer": "Hochiminh city Power Department",
        "title": "Project Engineer",
        "url": "#",
        "location": "Vietnam",
        "dates": "1988 - 1996",
        "description": "Wrote program to automate budget planning and budget balancing for electrical facilities construction.<br>" +
            "Worked and earned valued experiences in management a big relational database."
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(element) {
            var url="%url%", data="%data%", formattedworkEmployer, formattedworkTitle, formattedworkLocation,
                formattedworkDates, formattedworkDescription;
            formattedworkEmployer = HTMLworkEmployer.replace(data, element.employer);
            formattedworkEmployer = formattedworkEmployer.replace(url, element.url);
            formattedworkTitle = HTMLworkTitle.replace(data, element.title);
            formattedworkLocation = HTMLworkLocation.replace(data, element.location);
            formattedworkDates = HTMLworkDates.replace(data, element.dates);
            formattedworkDescription = HTMLworkDescription.replace(data, element.description);
            $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkLocation);
            $(".work-entry:last").append(formattedworkDescription);
        });
    }
};

var education = {
    schools: [{
        name: "HoChiMinh City University of Technology",
        location: "Vietnam",
        url: "http://www.hcmut.edu.vn/en/",
        degree: "MS",
        majors: ["Computer Science"],
        dates: "1997-2000"
    }, {
        name: "Ho Chi Minh City University of Technology",
        location: "Vietnam",
        url: "http://www.hcmut.edu.vn/en/",
        degree: "BS",
        majors: ["Computer Science"],
        dates: "1993-1996"
    }, {
        name: "Odessa National Polytechnic University",
        location: "USSR(Soviet Union)",
        url: "http://opu.ua/eng/",
        degree: "BS",
        majors: ["Radio Electronics"],
        dates: "1982-1987"
    }],
    onlineCourses: [{
        title: "Full Stack Web Developer Nanodegree Program",
        school: "Udacity",
        url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
        dates: "4/2015-9/2015"
    }],
    displaySchools: function() {
        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(element) {
            var url="%url%", data="%data%", formattedName, formattedLocation, formattedMajors, formattedDegree, formattedDates;
            formattedName = HTMLschoolName.replace(data, element.name);
            formattedName = formattedName.replace(url, element.url);
            formattedLocation = HTMLschoolLocation.replace(data, element.location);
            formattedMajors = HTMLschoolMajor.replace(data, element.majors);
            formattedDegree = HTMLschoolDegree.replace(data, element.degree);
            formattedDates = HTMLschoolDates.replace(data, element.dates);
            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajors);
        });
    },
    displayOnlinCourses: function() {
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(element) {
                var url="%url%", data="%data%", formattedTitle, formattedSchool, formattedDates;
                $("#education").append(HTMLschoolStart);
                formattedTitle = HTMLonlineTitle.replace(data, element.title);
                formattedTitle = formattedTitle.replace(url, element.url);
                formattedSchool = HTMLonlineSchool.replace(data, element.school);
                formattedDates = HTMLonlineDates.replace(data, element.dates);
                $(".education-entry:last").append(formattedTitle + formattedSchool);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append("<br>");
            });
        }
    }
};

// Calls display functions in each section
bio.display();
projects.display();
work.display();
education.displaySchools();
education.displayOnlinCourses();

// $('#main').append(internationalizeButton);
$("#map-div").append(googleMap);