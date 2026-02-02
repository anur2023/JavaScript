User Management System using Supabase

(HTML, CSS, JavaScript & REST API)

Introduction

This project is a simple User Management System where users can enter their details through a web form and store them in a real cloud database. The stored data can later be fetched from the database and displayed on the same webpage.

The main purpose of this project is to understand how frontend applications communicate with backend services using REST APIs and how POST and GET operations work in real-world applications.

Objectives

Connect frontend with real database

Learn REST API concepts

Perform POST and GET operations

Store form data in database

Retrieve specific user data

Display data in table format

Technologies Used

HTML

CSS

JavaScript

Supabase

Project Structure
supabase-form-project
│
├── index.html
├── style.css
├── script.js
└── README.md

Project Overview

The application contains:

A form for user input

A submit button to save data

An input field to enter user ID

A load button to fetch user data

A table to display records

Backend Setup (Supabase)

Create Supabase project

Create table named:

User


Add columns:

Column	Type
id	int8 (Primary Key)
Name	text
Address	text
Mobile	text
Age	int4

Disable Row Level Security (RLS)

Configuration

In script.js:

const API_URL = "https://PROJECT_ID.supabase.co/rest/v1/User";
const API_KEY = "YOUR_PUBLISHABLE_KEY";

POST Operation (Create User)

When user clicks Submit:

Read form data

Convert data to JSON

Send POST request

Data stored in database

Show success message

Reset form

GET Operation (Read User by ID)

When user enters ID and clicks Load:

Read ID

Send GET request with filter

Receive record

Display in table

Example filter:

?id=eq.1

Data Flow
Form → JavaScript → Supabase → Database
Database → Supabase → JavaScript → Table

Key Concepts Used

Fetch API

async / await

REST APIs

JSON

DOM Manipulation

Styling

CSS is used to:

Style form

Style buttons

Format table

Improve readability

Output

Data saved successfully

Data fetched correctly

Table displays records

Learning Outcomes

Understood frontend-backend communication

Learned Supabase integration

Practiced REST API usage

Improved JavaScript skills

Future Scope

Update user

Delete user

Search by name

Validation

Better UI

Author

Anuruddh Kumar