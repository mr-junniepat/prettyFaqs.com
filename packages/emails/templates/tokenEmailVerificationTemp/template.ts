export const tokenEmailVerificationTemp =  `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo img {
            max-width: 150px;
            height: auto;
        }

        .content {
            text-align: left;
        }

        .verification-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }

        .verification-link {
            display: block;
            margin-top: 10px;
            text-align: center;
            color: #007bff;
            text-decoration: none;
        }

        .instructions {
            margin-top: 20px;
            text-align: center;
            font-size: 16px;
            color: #666;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="logo">
            <img src="https://example.com/logo.png" alt="Company Logo">
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>You are receiving this email to verify your email address.</p>
            <p>Please click the button below to verify your email:</p>
            <a href={{token}} class="verification-btn">Verify Email</a>
            <p class="instructions">If the button above does not work, you can also <a href={{token}}>click here</a> or copy and paste the following link into your browser:</p>
            <p class="verification-link">{{token}}</p>
            <p class="instructions">Thank you!</p>
        </div>
    </div>
</body>

</html>


`