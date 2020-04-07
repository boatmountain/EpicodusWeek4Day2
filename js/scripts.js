//Business Logic for AddressBook // AddressBook is a constructor (AB) contains a single property: an empty array called "contacts"
function AddressBook() {
    this.contacts = [];
    // Add an uniqueID  to record an unique ID
    this.currentId = 0;
  }

AddressBook.prototype.addContact = function(contact)  {
//This prototype.assignId must be called before the contact property is pushed to the AB 
    contact.id = this.assignId()
    this.contacts.push(contact);    
}
// This new method will increment the 'this.currentId' property on the AD obj. by 1 and return the updated value.  This makes themunique by not repeating
AddressBook.prototype.assignId = function ()  {
    this.currentId += 1;
    return this.currentId;
}
// Business Logic for Contacts  // "contacts" Objects
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }


