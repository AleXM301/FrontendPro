let user = {
    name: 'John',
    email: 'john@example.com',
    password: 'qwerty',
    city: 'Singapore',

    infoUser () {
        console.log(`User name: ${user.name}, email: ${user.email}, password: ${user.password}, city: ${user.city}`);
    }
};
user.infoUser();