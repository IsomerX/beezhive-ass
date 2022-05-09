import { Toast } from "bootstrap";

const phoneValidation = (phoneNo) => {
    if (phoneNo.length < 10) {
        alert("Please enter a valid phone number");
        return 0;
    }
    return 1;
};

const nameVerification = (name) => {
    if (name.length === 0) {
        alert("Please enter a valid name");
        return 0;
    }
    return 1;
};

const emailVerification = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
        alert("Please enter a valid email");
        return 0;
    }
    return 1;
};

export { phoneValidation, nameVerification, emailVerification };
