JavaScript DOM Project 
Topics Covered: 
    >>Basic functions of JS - Arrays, event handlers, query selectors, get elements etc.


Objective 
    >>The objective of this assignment is to create a web application that allows users to browse and book services.

File Structure: 
    >>main 
        >>index.html 
        >>style.css 
        >>script.js 
        >>README.md
        >>images folder

Steps: 
    >>Created HTML, CSS and JS files 
    >>Linked the style sheet and script to HTML
    >>In HTML:
        >>Designed the webpage
        >>The header
        >>cart section
        >>Services display
        >>forms display 

    >>Gave style to the webpage using CSS.

    >>In JS:
        >>created an array services that contain all the services details in object format.
        >>Store all the required HTML elements in var objects.
        >>initialise a var current services to 0 to display services one by one
        >>created displayServices fn to display services one by one:
            >>using innerHTML, inserted serviceds details form service array to the card 
            >>make event handlers for skip btn and add btn 
            >>if all services are viewed created if statement for that
        >>Created an empty array cart for storing selected serivces
        >>Created displayCart fn to add services in the cart if selected
         >>used innerHTML to add items in table and also added price to make total value visible.
        >>Created event listeners to display error or sucess messages.




How to Run: 
    >>Clone or download this folder. 
    >>Open index.html directly in any web browser.
