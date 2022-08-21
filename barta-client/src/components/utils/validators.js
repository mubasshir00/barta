export const validateLoginForm = ({mail,password}) =>{
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({mail,username,password}) =>{
    return (
      validateMail(mail) &&
      validatePassword(password) &&
      validateUsername(username)
    );
}

export const validatePassword = (password) =>{
    return password.length>6 && password.length<12;
}

export const validateMail = (mail) =>{
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(mail);
}

const validateUsername = (username) =>{
    return username.length > 2 && username.length<13;
}