# Room Allocation System

## Overview
This project is a web application that digitalizes the hospitality process for group accommodation. It allows users to upload two CSV files to efficiently allocate rooms in hostels while ensuring group members with the same ID stay together and adhere to hostel capacities and gender-specific accommodations.

## Features
- Upload CSV files for group and hostel information
- Allocate rooms based on group size, gender, and room capacity
- View the allocation results
- Download the allocation results as a CSV file

## Installation

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```
3. Run the Flask application:
    ```sh
    python app.py
    ```

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install the required packages:
    ```sh
    npm install
    ```
3. Start the React application:
    ```sh
    npm start
    ```

## Usage
1. Open the web application in your browser (typically at `http://localhost:3000`).
2. Upload the Group Information CSV file and the Hostel Information CSV file.
3. Click on "Allocate Rooms" to process the files and display the allocation results.
4. Download the results as a CSV file if needed.

## File Format
### Group Information
- Group ID, Members, Gender
  ```csv
  Group ID,Members,Gender
  101,3,Boys
  102,4,Girls
  103,2,Boys
  104,5,Girls
  105,8,5 Boys & 3 Girls
