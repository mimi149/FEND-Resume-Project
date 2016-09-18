// "use strict";
var bio = {
    name: "Mimi Nguyen",
    role: "Software Engineer",
    contacts: {
        mobile: "714-276-4033",
        email: "149baotran@gmail.com",
        github: "https://github.com/mimi149",
        linkedIn: "https://www.linkedin.com/in/miminguyencs",
        location: "Fountain Valley, CA",
        portfolio: "https://mimi-app.herokuapp.com/portfolio"
    },
    welcomeMessage: "Hi! I'm Mimi, I love learning, coding. and yoga.",
    skills: ["Python, C++, JavaScript, HTML, CSS", "Flask, Django, SQLAlchemy, webapp2, jinja2, Selenium",
             "jQuery, AngularJS, NodeJS, Bootstrap", " Linux, Visual Studio, Git, Atlassian JIRA/Bitbucket, Grunt, Vagrant",
             "Google Cloud Platform, Telerik Platform",
             "Database Design, PostgresSQL, MySQL"],
    biopic: "images/baotran.jpg",
    display: function() {
        var url="%url%", data="%data%", formattedName, formattedRole, formattedMobile, formattedEmail, formattedGithub,
        formattedLinkedIn, formattedLocation, formattedPortfolio, formattedBioPic, formattedWelcomeMsg;

        formattedName = HTMLheaderName.replace(data, bio.name);
        formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        formattedGithub = formattedGithub.replace(url, bio.contacts.github);
        formattedLinkedIn = HTMLLinkedIn.replace(data, bio.contacts.linkedIn);
        formattedLinkedIn = formattedLinkedIn.replace(url, bio.contacts.linkedIn);
        formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        formattedPortfolio = HTMLportfolio.replace(data, bio.contacts.portfolio);
        formattedPortfolio = formattedPortfolio.replace(url, bio.contacts.portfolio);
        $("#topContacts").append(formattedMobile + formattedEmail  + formattedLocation  + formattedGithub + formattedLinkedIn + formattedPortfolio);

        formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(element) {
            var formattedSkill = HTMLskills.replace(data, element);
            $("#skills").append(formattedSkill);
        });
        $("#footerContacts").append(formattedMobile + formattedEmail  + formattedLocation  + formattedGithub + formattedLinkedIn + formattedPortfolio);
    }
};

var projects = {
    projects: [
        {
            "title": "Paytolls project",
            "dates": "08/2016, ongoing development",
            "urls": ["https://github.com/mimi149/paytollsapp"],
            "description":
                "- Hybrid mobile app developing on Telerik platform.<br>" +
                "- Using cloud data from Telerik Backend Services JavaScript SDK.<br>" +
                "- Using Telerik KendoUI.",
            "images": ["images/paytolls-1-640.png"]
        },
        {
            "title": "Classic Arcade Game Project",
            "dates": "07/2016",
            "urls": ["https://fend-p3-game.herokuapp.com/", "https://github.com/mimi149/FEND-classic-arcade-game-project"],
            "description":
                "- Third project for Udacity's Front End Web Developer Nanodegree Program.<br>" +
                "- Using Object Oriented JavaScript and HTML5 canvas",
            "images": ["images/FEND-p3-game-4-640.png"]
        },
        {
            "title": "Resume project",
            "dates": "06/2016",
            "urls": ["https://mimi-app.herokuapp.com/resume", "https://github.com/mimi149/FEND-Resume-Project"],
            "description":
                "- Second project for Udacity's Front End Web Developer Nanodegree Program.<br>" +
                "- Using JS, JQuery, Bootstrap, Google Maps API.",
            "images": ["images/mimi-resume-2-640.png", "images/mimi-resume-1-640.png"]
        },
        {
            "title": "Portfolio project",
            "dates": "05/2016",
            "urls": ["https://mimi-app.herokuapp.com/portfolio", "https://github.com/mimi149/FSND-p1-Entertainment.git"],
            "description":
                "- First project for Udacity's Front End Web Developer Nanodegree Program.<br>" +
                "- Focused on Responsive Web Design and Responsive Images.",
            "images": ["images/mimi-portfolio-640.png"]
        },
        {
            "title": "Conference Organization App",
            "dates": "07/2015",
            "urls": ["https://mimi-app.herokuapp.com/conference",
                     "https://github.com/mimi149/FSND-p5-Linux-Server-Configuration.git",
                     "https://github.com/mimi149/FSND-p3-Conference-App.git"],
            "description":
                "- Third and Fifth projects for Udacity's Full Stack Web Developer Nanodegree Program.<br>" +
                "- Built with Python/Flask, SQLAlchemy, PostgreSQL, jQuery, HTML, CSS, Bootstrap; authenticate using OAuth.<br>" +
                "- Help facilitating conference registration and authentication processes for pafticipants.<br>" +
                "- Authenticated users have the ability to post, edit, and delete their own items.<br>" +
                "- Users can upload/download documents related to the sessions and mard/unmark their favorite sesions.",
            "images": ["images/FSND-p3-conference-1-640.png",
                       "images/FSND-p3-conference-2-640.png",
                       "images/FSND-p3-conference-3-640.png",
                       "images/FSND-p3-conference-4-640.png"]
        },
        {
            "title": "Cloud-based API server",
            "dates": "06/2015",
            "urls": ["https://apis-explorer.appspot.com/apis-explorer/?base=https://p4conference.appspot.com/_ah/api#p/conference/v1/",
                     "https://github.com/mimi149/FSND-p4-Conference-APIs.git"],
            "description":
                "- Fourth project for Udacity's Front End Web Developer Nanodegree Program.<br>" +
                "- Built with Google App Engine, Google NDB Datastore, and Google Cloud Endpoints.<br>" +
                "- Focused on using Google Cloud Platform to develop a scalable web app.<br>" +
                "- Helps organizing conferences and sessions.<br>" +
                "- Supported features: user authentication, create and update conferences, create sessions (only by the organizer of the conference),<br>" +
                "  register and mark, query by a variety of filters.",
            "images": ["images/API_project-640.png"]
        },
        {
            "title": "Tournament project",
            "dates": "05/2015",
            "urls": ["https://mimi-app.herokuapp.com/tournament", "https://github.com/mimi149/FSND-p2-tournament"],
            "description":
                "- Second project for Udacity's Full Stack Web Developer Nanodegree Program.<br>" +
                "- Implement Swiss-system match making for pairing up players in each round.<br>" +
                "- Keep track of players and matches in game tournaments.<br>" +
                "- Using Python, Postgres, Vagrant.",
            "images": ["images/FSND-p2-tournament-640.png"]
        },
        {
            "title": "Entertainment project",
            "dates": "04/2015",
            "urls": ["https://mimi-app.herokuapp.com/entertainment", "https://github.com/mimi149/FSND-p1-Entertainment.git"],
            "description":
                "- First project for Udacity's Full Stack Web Developer Nanodegree Program.<br>" +
                "- Using Python, JS, and bootstrap.",
            "images": ["images/FSND-p1-movies-2-640.png", "images/FSND-p1-movies-3-640.png"]
        }
    ],
    display: function() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(element) {
            var url="%url%", urlName="%urlName%", data="%data%", formattedprojectTitle, formattedprojectDates, formattedprojectDescription;
            formattedprojectTitle = HTMLprojectTitle.replace(data, element.title);
            formattedprojectDates = HTMLprojectDates.replace(data, element.dates);
            $(".project-entry:last").append(formattedprojectTitle + formattedprojectDates);

            element.urls.forEach(function(element) {
                var formattedUrl = HTMLprojectUrl.replace(url, element);
                formattedUrl = formattedUrl.replace(urlName, element.substring(0, 60) + "...");
                $(".project-entry:last").append(formattedUrl);
            });

            formattedprojectDescription = HTMLprojectDescription.replace(data, element.description);
            $(".project-entry:last").append(formattedprojectDescription);

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
        "location": "Huntington Beach, CA",
        "dates": "11/2015 - 05/2016",
        "description": "- Write an automated test program for web application UI using Python/Selenium.<br>" +
            "- Develop web application, write APIs (Python/Flask, Postgres in the backend and JS, AngularJS, HTML, CSS in the front end.)"
    }, {
        "employer": "Hochiminh city University of Technology",
        "title": "Professor",
        "url": "http://www.hcmut.edu.vn/en/",
        "location": "Vietnam",
        "dates": "1996 - 2013",
        "description": "- Designed and taught courses in algorithms, data structures and database systems.<br>" +
            "- Researched relational and object oriented databases.<br>" +
            "- Designed database for many applications and involved in some projects at the University.<br>" +
            "- Coached university's student teams who participated in regional and international ACM-ICPC " +
            "(Association of Computing Machinery - International Collegiate Programming Contest) for 7 years.<br>" +
            "- Advised more than 15 students on their graduation theses every year."
    }, {
        "employer": "Hochiminh city Power Department",
        "title": "Project Engineer",
        "url": "",
        "location": "Vietnam",
        "dates": "1988 - 1996",
        "description": "- Wrote program to automate budget planning and budget balancing for electrical facilities construction.<br>" +
            "- Worked and earned valued experiences in management a big relational database."
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(element) {
            var url="%url%", data="%data%", formattedworkEmployer, formattedworkTitle, formattedworkLocation,
                formattedworkDates, formattedworkDescription;
            formattedworkEmployer = HTMLworkEmployer.replace(data, element.employer);
            if (element.url)
                formattedworkEmployer = formattedworkEmployer.replace(url, element.url) ;
            else
                formattedworkEmployer = formattedworkEmployer.replace('href="%url%"', "") ;
            formattedworkTitle = HTMLworkTitle.replace(data, element.title);
            formattedworkLocation = HTMLworkLocation.replace(data, element.location);
            formattedworkDates = HTMLworkDates.replace(data, element.dates);
            formattedworkDescription = HTMLworkDescription.replace(data, element.description);
            $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
            $(".work-entry:last").append(formattedworkLocation);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkDescription);
        });
    }
};

var education = {
    schools: [{
        name: "HoChiMinh City University of Technology",
        location: "Vietnam",
        url: "http://www.hcmut.edu.vn/en/",
        degree: "M.S.",
        majors: ["Computer Science"],
        dates: "1997-2000"
    }, {
        name: "Ho Chi Minh City University of Technology",
        location: "Vietnam",
        url: "http://www.hcmut.edu.vn/en/",
        degree: "B.S. with Highest Distinction",
        majors: ["Computer Science"],
        dates: "1993-1996"
    }, {
        name: "Odessa National Polytechnic University",
        location: "USSR(Soviet Union)",
        url: "http://opu.ua/eng/",
        degree: "B.S. with Honor Diploma",
        majors: ["Radio Electronics"],
        dates: "1982-1987"
    }],
    onlineCourses: [{
        title: "Senior Web Developer Nanodegree Program",
        school: "Udacity",
        url: "https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802",
        dates: "From 4/2016, still in progress"
    },{
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