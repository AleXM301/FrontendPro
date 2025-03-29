const userForm = document.querySelector('.user_form');

userForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const formData = new FormData(userForm);

    validate(
        formData,
        'name',
        /^(?=[A-Za-zА-Яа-яЁё ]{6,}$)[A-Za-zА-Яа-яЁё]+(?: [A-Za-zА-Яа-яЁё]+)?$/,
        "Name must be at least 5 characters long"
    );
    validate(
        formData,
        'message',
        /^(?=[A-Za-zА-Яа-яЁё ]{6,}$)[A-Za-zА-Яа-яЁё]+(?: [A-Za-zА-Яа-яЁё]+)?$/,
        "Message must be at least 5 characters long"
    );
    validate(
        formData,
        'phone',
        /^\+380\d{9}$/,
        "Phone must be like: +380 ** *** ****"
    );
    validate(
        formData,
        'email',
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Not Valid e-mail address"
    );
});

function validate(formData, key, regExp, message) {

    let formValue = formData.get(key);
    if (validFormData(formValue, regExp)) {
        error(key, message);
    } else {
        error(key, "");
    }
}

function validFormData(data, regExp) {
    return !data || !regExp.test(data);
}

function error(select, message) {
    document.querySelector(`#error-${select}`).textContent = `${message}`;
}
