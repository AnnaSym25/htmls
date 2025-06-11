var AddressBook = function(){
 /* add members here */

 var contact = {
name: ko.observable(),
phoneNumber: ko.observable()


 }


 /* array of contacts */
 var contacts = ko.observableArray();
	
 /* method to clear the contact observable */
 var clearContact = function () {
     contact.name(null);
     contact.phoneNumber(null);
 };
 
 /* method to add contact to contacts array */
 var addContact = function () {
     console.log("Adding new contact wih name: " + contact.name() +" and phone number: " + contact.phoneNumber());
     //add the contact to the contacts array
     contacts.push({name: contact.name(), phoneNumber: contact.phoneNumber()});
     //clear the contact
     clearContact();
 };
 


var init = function(){

 /* add code to initialize this module */
 ko.applyBindings(AddressBook);

}

/* execute the init function when the DOM is ready */
$(init);

return {


    contacts: contacts,
    contact: contact,
    addContact: addContact
    

  /* add members that will be exposed publicly */

}


}(); //end addressbook function 



 







