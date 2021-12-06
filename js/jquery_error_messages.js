jQuery.extend(jQuery.validator.messages, {
    required: "Это поле обязательно для заполнения",
    remote: "Пожалуйста исправте это поле",
    email: "Неверный формат E-mail",
    number: "Пожалуйста введите верный номер",
    digits: "Пожалуйста, введите цифры",
    maxlength: jQuery.validator.format("Пожалуйста введите не более {0} цифр"),
    minlength: jQuery.validator.format("Пожалуйста введите от {0} цифр"),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});