# Frontend for Cloud Resume

This repository contains the frontend code for the Cloud Resume Challenge, designed to showcase a simple web page that includes a visitor counter. The frontend interacts with a backend service to display a live count of page visitors.

## Repository Structure

- **css/**: Contains the CSS files for styling the resume webpage.
- **images/**: Contains images used in the resume, such as profile pictures or background images.
- **js/**: Contains JavaScript files.
  - **visitor-counter.js**: Script to interact with the backend API to fetch and display the visitor count.
- **index.html**: The main HTML file for the resume webpage.
- **README.md**: This file, providing an overview of the repository.

## Setup Instructions

1. **Clone the repository**: Clone this repository to your local machine using:
   ```bash
   git clone <repository-url>

2. **Navigate to the project folder**:
   ```bash
   cd frontend

3. **Set up a web server for local testing (optional)**:
   You can use a local server to test the HTML file on your browser. Here are a few options:

   - **Using Python (if installed)**:
     ```bash
     python3 -m http.server
     ```
   - **Using Node.js `http-server` (if installed)**:
     ```bash
     npx http-server .
     ```

   After starting the server, open the displayed URL in your browser to view the website.

## Deployment Instructions

1. **Upload files to S3**: If using AWS S3 for hosting, upload the contents of the `frontend` folder to your S3 bucket.

2. **Set up permissions**: Make sure the S3 bucket allows public access to these files. You might need to set up a bucket policy that allows public access.

3. **Enable static website hosting**: In the S3 bucket settings, enable static website hosting and specify `index.html` as the index document.

4. **Configure CORS (Cross-Origin Resource Sharing)**:
   To allow the frontend to interact with the backend visitor counter API, configure CORS settings in your S3 bucket. Add a rule allowing access from the origin where your backend API is hosted.

## Usage

- After deploying, navigate to your S3 bucket's website URL or custom domain (if configured) to view the resume webpage.
- The `index.html` page will display your resume content along with a visitor counter that updates with each visit.
- The visitor count is dynamically fetched from the backend API via the `visitor-counter.js` script.
