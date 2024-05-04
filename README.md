# Project: Customer Calendar App

## Description
Build a custom calendar app with having several view components, displaying holidays, and writing notes for several dates

## Features
- In the header, it should display the current date. (e.g. Saturday, May 4)
- Right below the header, user should be able to switch between "MonthSelectView" and "YearSelectView"(1970-2050). In the same line, there should be "UP" and "DOWN" button to increase/decrease the selected year or month
- In the main ContentView, it should display the dates and days for the selected year/month. Should show inactivate dates which are not within the current month. Get list of US holidays and mark the holidays as red color
- When user clicks certain date, then he/she should be able to input/edit notes for the selected date.
In the calendar, dates with notes taken should be displayed with green badge. (Notes should be saved on the backend side). If user inputs empty string as notes, then green badge should be removed/cleared.
- In the footer, there is "Export Notes" button to fetch notes from the backend and save notes for the selected month as JSON file.

## Screenshots
[View Screenshots](/screenshots)

## Requirements


## Frontend
### Tech Stacks
- React
- TypeScript
- HTML2Canvas
- Axios
- Vite

### Features
- Border Radius, Box Shadow, Text Shadow, CSS Cursor Generators
- Copy CSS styles to clipboard

### Challenges & Solutions
- Adopted dynamic CSS with inline styles
- Achieved pixel-perfect design
- Copied styles using JavaScript's navigator object

## Backend
### Tech Stacks
- Node.js
- Express.js
- CORS module

### API Features
- `/api/capture`: Receives image data (Canvas DataURI) from frontend

## Installation

1. Clone the repository

2. Set up the node modules on both front end and back end side
- Please use Node 16.14.0

```shell
npm install
```

3. Run the program

- Front-end

```shell
npm run dev
```

- Back-end
```shell
node server.js
```

4. Open your web browser and visit `http://127.0.0.1:5173/` to see the application running.