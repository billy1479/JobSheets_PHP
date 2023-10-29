# Job Sheet System

This repository contains a website that allows users to enter details for a job they have done. It allows users to enter in details like job date, client, job details, equipment used and expenses owed along with other things. The web form collects all this data and stores it in a SQL database which is connected to during the session. 

Users are able to view old jobs and edit particular details of them. Along with this, when a job is submitted, the system utilises PHPMAILER which lets the details get compiled into a basic template and emailed to a recipient (an expenses team).

## General Functionality

- This is a multi-page website where there are particular pages assigned to a specific function (i.e. addjob.html is for adding a job sheet only)
- There is navigation between all pages
- Each page has an assigned JS file for in-page functionality and form submission
- This page uses a bootstrap template and so some files came with that (Open source)
- All custom css is stored in main.css
- All PHP functions are stored in Functions

## SQL Server

- Authentication details will need to be filled out in connect.php

## Database

- Database is called jobs2
- There are 3 tables:
    - jobs
    - engineers
    - clients
- jobs - stores all job sheet information and has a primary key of ID
- engineers - stores engineer information and has a primary key of ID
- clients - stores all client information and has a primary key of ID
- Engineers are reference in jobs as they form part of the job sheet, so does the client name and address