var app = angular.module('app', []);

app.factory("contacts", function() {
  return [
    { "firstName": "bob", "lastName": "smith" },
    { "firstName": "bob", "lastName": "douglas" },
    { "firstName": "bob", "lastName": "jones" }
  ]
});

app.controller("AppCtrl", function(contacts) {
  this.contacts = contacts;
  this.selectedContact = null;
  this.contactCopy = null;

  this.selectContact = function(contact) {
    this.selectedContact = contact;
    this.contactCopy = angular.copy(contact);
  }
  this.saveContact = function() {
    this.selectedContact.firstName = this.contactCopy.firstName
  }
});
