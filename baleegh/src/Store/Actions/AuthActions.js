const SIGNUP_USER = 'SIGNUP_USER';
const LOGIN_USER = 'LOGIN_USER';

export function signup_user(name, email, password, phoneNumber, level, gender) {
    // var filename = "users"
    // var jsonData = {
    //     name: name,
    //     email: email,
    //     password: password,
    //     phoneNumber: phoneNumber,
    //     level: level,
    //     gender: gender
    // };
    // const fileData = JSON.stringify(jsonData);
    // const blob = new Blob([fileData], { type: "text/plain" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.download = `${filename}.json`;
    // link.href = url;
    // link.click();
    // console.log("hi from action")
    return { type: SIGNUP_USER, payload: { name, email, password, phoneNumber, level, gender } }
}