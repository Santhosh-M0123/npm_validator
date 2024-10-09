const v_password = require('./p-validator');
const v_email = require('./e-validator');
const v_url = require('./url-validator');

//v_password is to validate the email
//v_email is to check the valid email
//v_url is to check the valid url

module.exports = {
    v_email,
    v_password,
    v_url
};

