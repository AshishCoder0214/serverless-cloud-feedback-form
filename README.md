# AWS Serverless Feedback Form

A serverless web-based feedback form built using **HTML, CSS, JavaScript, Amazon S3, Amazon API Gateway, and AWS Lambda**. The project demonstrates how a static frontend can communicate with a serverless backend without maintaining a traditional server.

## 🚀 Project Overview

The **AWS Serverless Feedback Form** allows users to submit their feedback through a simple and responsive web interface.

When a user submits the form:

1. The frontend collects the user's feedback.
2. JavaScript sends the data to an API endpoint.
3. **Amazon API Gateway** receives the HTTP request.
4. **AWS Lambda** processes the request.
5. The serverless backend returns a response to the frontend.
6. The user receives a success or error message.

The frontend is hosted using **Amazon S3 Static Website Hosting**, making the complete application lightweight, scalable, and serverless.

---

## ✨ Features

* Responsive feedback form
* Static website hosting using Amazon S3
* Serverless backend using AWS Lambda
* REST API using Amazon API Gateway
* JavaScript-based API integration
* CORS configuration for frontend-backend communication
* Success and error handling
* No traditional server required
* Scalable AWS serverless architecture
* Simple and easy-to-maintain codebase

---

## 🏗️ Architecture

```text
              User
                │
                ▼
       ┌─────────────────┐
       │   Web Browser   │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │   Amazon S3     │
       │ Static Website  │
       └────────┬────────┘
                │
          HTTP Request
                │
                ▼
       ┌─────────────────┐
       │ API Gateway     │
       │   REST API      │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │  AWS Lambda     │
       │ Serverless      │
       │ Backend Logic   │
       └────────┬────────┘
                │
                ▼
        Response to User
```

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

### AWS Services

* **Amazon S3** – Static website hosting
* **Amazon API Gateway** – REST API endpoint
* **AWS Lambda** – Serverless backend processing
* **AWS IAM** – Permissions and access management

---

## 📁 Project Structure

```text
serverless-feedback-form/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### File Description

| File         | Description                         |
| ------------ | ----------------------------------- |
| `index.html` | Structure of the feedback form      |
| `style.css`  | Styling and responsive design       |
| `script.js`  | Form handling and API communication |
| `README.md`  | Project documentation               |

---

## ⚙️ How It Works

### 1. Frontend

The feedback form is created using HTML and styled using CSS.

Users can enter their information and submit feedback through the web interface.

### 2. JavaScript

JavaScript captures the submitted form data and sends it to the API Gateway endpoint using the `fetch()` API.

Example:

```javascript
fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
});
```

### 3. API Gateway

Amazon API Gateway provides a public HTTP endpoint that receives requests from the frontend.

The API is configured to forward the request to the Lambda function.

### 4. AWS Lambda

AWS Lambda contains the backend logic.

The function receives the request, processes the submitted feedback, and returns an appropriate HTTP response.

Example response:

```json
{
    "statusCode": 200,
    "body": "Feedback submitted successfully"
}
```

### 5. S3 Hosting

The frontend files are uploaded to an Amazon S3 bucket configured for static website hosting.

The application can then be accessed through the S3 website endpoint.

---

## 🔧 Setup and Deployment

### Prerequisites

Before deploying the project, you need:

* An AWS account
* Basic knowledge of AWS
* An S3 bucket
* An API Gateway API
* An AWS Lambda function
* A modern web browser

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/serverless-feedback-form.git
```

Move into the project directory:

```bash
cd serverless-feedback-form
```

---

### Step 2 — Configure the API Endpoint

Open:

```text
script.js
```

Replace the API URL with your API Gateway endpoint:

```javascript
const API_URL = "YOUR_API_GATEWAY_URL";
```

For example:

```javascript
const API_URL = "https://your-api-id.execute-api.region.amazonaws.com/feedback";
```

**Do not commit private AWS credentials or secret keys to GitHub.**

---

### Step 3 — Create Lambda Function

Create an AWS Lambda function and configure it to process the incoming POST request.

The Lambda function should:

* Receive the API Gateway event
* Parse the request body
* Process the feedback
* Return an HTTP response
* Include appropriate CORS headers

Example response structure:

```javascript
return {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
    },
    body: JSON.stringify({
        message: "Feedback submitted successfully"
    })
};
```

---

### Step 4 — Configure API Gateway

Create an API Gateway endpoint connected to the Lambda function.

Configure:

```text
POST /feedback
```

The request should be forwarded to the Lambda function.

Make sure CORS is properly configured so that the S3-hosted frontend can communicate with the API.

---

### Step 5 — Configure Amazon S3

Create an S3 bucket and upload:

```text
index.html
style.css
script.js
```

Enable **Static Website Hosting** and configure the required bucket permissions according to your AWS setup.

---

### Step 6 — Test the Application

Open the S3 website endpoint in a browser.

Fill out the feedback form and click **Submit**.

Verify that:

* The request reaches API Gateway.
* API Gateway invokes Lambda.
* Lambda processes the request.
* The frontend receives the response.
* A success message is displayed.

---

## 🔐 Security Considerations

For a production deployment, the following improvements are recommended:

* Avoid using unrestricted CORS (`*`) where possible.
* Restrict API access to trusted origins.
* Validate and sanitize all user input.
* Use appropriate IAM permissions following the principle of least privilege.
* Enable AWS CloudWatch logging and monitoring.
* Never expose AWS access keys or secret credentials in frontend code.
* Add rate limiting/throttling to the API.
* Consider authentication if the application handles sensitive information.

---

## 🐛 Common Issues

### CORS Error

If the browser reports a CORS error, verify that the API response contains the appropriate headers.

For example:

```text
Access-Control-Allow-Origin
Access-Control-Allow-Headers
Access-Control-Allow-Methods
```

Also verify that the API Gateway configuration and Lambda response are both configured correctly.

### API Gateway Route Error

Make sure the API contains a valid route such as:

```text
POST /feedback
```

and that the route is connected to the correct Lambda integration.

### S3 Access Denied

If the website displays an `AccessDenied` error, verify:

* S3 static website hosting configuration
* Bucket policy
* Object permissions
* Correct index document
* Correct S3 website endpoint

---

## 📊 Project Workflow

```text
User fills feedback form
          ↓
JavaScript captures form data
          ↓
Fetch API sends POST request
          ↓
Amazon API Gateway
          ↓
AWS Lambda
          ↓
Request processing
          ↓
Lambda response
          ↓
API Gateway
          ↓
Frontend displays result
```

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* AWS cloud services
* Serverless architecture
* Amazon S3 static website hosting
* AWS Lambda
* Amazon API Gateway
* REST API development
* JavaScript Fetch API
* CORS configuration
* IAM permissions
* Cloud deployment
* Debugging cloud-based applications
* Understanding frontend-to-serverless-backend communication

---

## 🔮 Future Improvements

The project can be extended with:

* Amazon DynamoDB for storing feedback
* AWS SES for email notifications
* Amazon Cognito for authentication
* CloudWatch monitoring and alerts
* API authentication
* Admin dashboard
* Feedback analytics
* Input validation
* CAPTCHA/spam protection
* Custom domain using Amazon Route 53
* HTTPS using Amazon CloudFront and AWS Certificate Manager

---

## 📸 Project Screenshots

Add screenshots of the following sections to make the repository more professional:

```text
screenshots/
├── feedback-form.png
├── successful-submission.png
├── s3-bucket.png
├── api-gateway.png
└── lambda-function.png
```

---

## 👨‍💻 Author

**Ashish Priyadarshi**

BCA Student | Cloud & Web Development Enthusiast

### Skills Demonstrated

```text
HTML | CSS | JavaScript | AWS | S3 | Lambda | API Gateway
```

---

## 📄 Internship Project

This project was developed as part of an **internship project** to gain practical experience in web development and cloud-based serverless technologies.

---

## ⭐ Acknowledgement

Thanks to the internship organization and mentors for providing the opportunity to work on a practical AWS serverless project and gain hands-on experience with cloud deployment and web development.

---

## 📜 License

This project is intended for educational and internship demonstration purposes.
