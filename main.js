let obj = {
    contacts: [
        {name: "Roma", phone: "+380 67 123 45 67", gmail: "roma.unique@gmail.com"},

        {name: "Nikita", phone: "+380 50 987 65 43", gmail: "nikita.mailbox@gmail.com"},

        {name: "Alisa", phone: "+380 93 456 78 90", gmail: "alisa.contact@gmail.com"},

        {name: "Denis", phone: "+380 73 112 23 34", gmail: "dni@gmail.com"}
    ],

    findByName(name) {
        return this.contacts.find(element => name === element.name);
    },

    findAllByName(name) {
        return this.contacts.filter(element => name === element.name);
    },

    addContact(contact) {
        if (contact === undefined || contact === null) {
            console.log("Нильзя ввести undefined или null");
        } else {
            return this.contacts.push(contact);
        }
    }

}
obj.addContact({name: "Roma", phone: "+380 73 629 03 81", gmail: "roman2004@gmail.com",});
obj.addContact(null);
console.log(obj.findAllByName("Roma"));
console.log(obj.findByName("Nikita"));
