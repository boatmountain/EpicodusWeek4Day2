//Business Logic for AddressBook // AddressBook (AB) contains a single property: an empty array called "contacts"
function AddressBook()  {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}
// Business Logic for Contacts  // "contacts"Objects
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}
