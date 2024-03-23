export const OTPEmailVerificationTemp =  `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email OTP Verification</title>
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

        .otp {
            margin-top: 30px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
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
            <p>Your One-Time Password (OTP) is:</p>
            <div class="otp">{{otp}}</div>
            <p class="instructions">Please use this OTP to complete the verification process.</p>
        </div>
    </div>
</body>

</html>

`