
const initState = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    level: '',
    gender: ''
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            console.log("hi from reducer")
            return {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                phoneNumber: action.payload.phoneNumber,
                level: action.payload.level,
                gender: action.payload.gender
            };
        default: return state;

    }
}

export default authReducer