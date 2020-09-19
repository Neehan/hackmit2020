/**
 * Saves the login state of the frontend application - among some other
 * things that we can add as we build the application.
 */

export default class StateManager {
  constructor() {
    this.logout();
  }

  login(userName, userId, fullName, accountType, subject) {
    this.isLoggedIn = true;
    this.userName = userName;
    this.userId = userId;
    this.fullName = fullName;
    this.accountType = accountType;
    this.subject = subject;
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = "";
    this.userId = "";
    this.fullName = "";
    this.accountType = "";
    this.subject = "";
  }

  loggedIn() {
    return this.isLoggedIn;
  }

  getUserName() {
    return this.userName;
  }
  
  getUserId() {
    return this.userId;
  }

  getFullName() {
    return this.fullName;
  }

  getAccountType() {
    return this.accountType;
  }

  getSubject() {
    return this.subject;
  }
}