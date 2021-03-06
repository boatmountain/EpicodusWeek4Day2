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
AddressBook.prototype.assignId = function()  {
    this.currentId += 1;
    return this.currentId;
}

// This new method will find a specific contact in AB
// Id is taken as an argument because it will contain the unique ID assigned to each contact
AddressBook.prototype.findContact = function(id)  {
// The method loops through the AB obj contacts array checking entry id against id provided to the "prototype.findContact"
// 'For loop' is used because it can break out unlike a 'for each loop'
    for (var i=0; i < this.contacts.length; i++) {
// To verify this array element's id property is the contact
        if (this.contacts[i]) {
// When match is found, the method is return
            if(this.contacts[i].id == id) {
                return this.contacts[i];
            }
        }
    };
    return false
}
//This is a new method that will delete an existing contact or return false if contact doesn't exist
//Id is taken as an argument because it will conain the unique id assigned to each conact
AddressBook.prototype.deleteContact = function(id)  {
//This method loops through the AB obj contacts array checking entry id against id provided to the "prototype.deleteContact"
    for (var i=0; i < this.contacts.length; i++)  {
// To check an array element's id property if that element is a contact
        if (this.contacts[i]) {
            if (this.contacts[i].id == id) {
                delete this.contacts[i];
                    return true;
            
            }
        }
    };
    return false;
}

AddressBook.prototype.updateContact = function(id) {
    for(var = 0; i = this.contacts.length; i++)  {
        if(this.contacts[i]) {
            if (this.contacts[i].id == id) {
                update this.contacts[i];
                    return
            }
        }
    };
    return false;
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


