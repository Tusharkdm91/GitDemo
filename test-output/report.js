$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Tushar/Cucumber_Learning/CucumberProject/Features/banficologin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login in to the application",
  "description": "",
  "id": "login-page;login-in-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "go to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select SignIn menu button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "BanficoLogin.go_to_login_page()"
});
formatter.result({
  "duration": 97155000,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinations.BanficoLogin.go_to_login_page(BanficoLogin.java:19)\r\n\tat ✽.Given go to login page(C:/Tushar/Cucumber_Learning/CucumberProject/Features/banficologin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BanficoLogin.select_SignIn_menu_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BanficoLogin.enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BanficoLogin.click_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BanficoLogin.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "skipped"
});
});