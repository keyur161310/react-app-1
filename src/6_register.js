import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
 <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register - Create Account</title>
  <style dangerouslySetInnerHTML={{__html: "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n\n    body {\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      min-height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n    }\n\n    .container {\n      background: white;\n      padding: 40px 32px;\n      border-radius: 16px;\n      box-shadow: 0 10px 30px rgba(0,0,0,0.22);\n      width: 100%;\n      max-width: 420px;\n    }\n\n    h1 {\n      text-align: center;\n      margin-bottom: 32px;\n      color: #2c3e50;\n      font-size: 28px;\n      font-weight: 600;\n    }\n\n    .form-group {\n      margin-bottom: 22px;\n    }\n\n    label {\n      display: block;\n      margin-bottom: 8px;\n      color: #34495e;\n      font-weight: 500;\n      font-size: 15px;\n    }\n\n    input[type=\"text\"],\n    input[type=\"email\"],\n    input[type=\"tel\"],\n    input[type=\"password\"],\n    input[type=\"date\"],\n    select {\n      width: 100%;\n      padding: 14px 16px;\n      border: 1px solid #dfe6e9;\n      border-radius: 8px;\n      font-size: 16px;\n      transition: all 0.2s;\n    }\n\n    input:focus,\n    select:focus {\n      outline: none;\n      border-color: #667eea;\n      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);\n    }\n\n    .gender-group {\n      display: flex;\n      gap: 24px;\n      margin-top: 8px;\n    }\n\n    .gender-group label {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-weight: normal;\n      cursor: pointer;\n    }\n\n    button {\n      width: 100%;\n      padding: 16px;\n      background: #667eea;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      font-size: 17px;\n      font-weight: 600;\n      cursor: pointer;\n      margin-top: 12px;\n      transition: background 0.25s;\n    }\n\n    button:hover {\n      background: #5a67d8;\n    }\n\n    button:active {\n      transform: translateY(1px);\n    }\n\n    .footer-text {\n      text-align: center;\n      margin-top: 28px;\n      color: #7f8c8d;\n      font-size: 14px;\n    }\n\n    .footer-text a {\n      color: #667eea;\n      text-decoration: none;\n      font-weight: 500;\n    }\n\n    @media (max-width: 480px) {\n      .container {\n        padding: 32px 20px;\n      }\n    }\n  " }} />
  <div className="container">
    <h1>Create Account</h1>
    <form action method="post" noValidate>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input type="tel" id="mobile" name="mobile" placeholder="98765 43210" pattern="[0-9]{10}" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="At least 8 characters" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter password" required />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <div className="gender-group">
          <label><input type="radio" name="gender" defaultValue="male" required /> Male</label>
          <label><input type="radio" name="gender" defaultValue="female" /> Female</label>
          <label><input type="radio" name="gender" defaultValue="other" /> Other</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <div className="footer-text">
      Already have an account? <a href="#">Sign in</a>
    </div>
  </div>
</div>
)
root.render(output);

