import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context";
import { auth, colRef } from "../firestore";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import {
    Container,
    Image,
    Navbar,
    Stack,
    Button,
    InputGroup,
    FormControl,
    FormLabel,
} from "react-bootstrap";
import Logo from "../assets/logo.jpeg";
import {
    emailVerification,
    nameVerification,
    phoneValidation,
} from "./validation";

const Signin = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log(user.uid);
            addDoc(colRef, {
                uid: user.uid,
                username: name.current.value,
                email: email.current.value,
                phoneNumber: phoneRef.current.value,
            }).then(() => navigate("/waitlist"));
        }
    }, [user, navigate]);

    const otpRef = useRef();
    const phoneRef = useRef();
    const name = useRef();
    const email = useRef();

    const [verified, setVerified] = useState(false);

    const generateCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {},
            },
            auth
        );
    };

    const submitHandler = () => {
        if (!nameVerification(name.current.value)) return;
        if (!phoneValidation(phoneRef.current.value)) return;
        if (!emailVerification(email.current.value)) return;

        const number = "+91" + phoneRef.current.value;
        generateCaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, number, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setVerified(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const otpSubmit = () => {
        const otp = otpRef.current.value;
        window.confirmationResult
            .confirm(otp)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const clicky = () => {
        console.log(name.current.value);
    };

    return (
        <div>
            <Stack gap={3} className="main" style={{ width: "100%" }}>
                <Container
                    className="justify-content-center align-items-center"
                    style={{ width: "100%" }}
                >
                    <h1
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "5em",
                            fontWeight: 800,
                            textAlign: "center",
                        }}
                    >
                        Sign Up
                    </h1>
                    <h2
                        style={{
                            fontFamily: "sora",
                            fontSize: "2em",
                            textAlign: "center",
                            color: "#888888",
                        }}
                    >
                        Register to the Waitlist Today
                    </h2>
                </Container>
                <Container
                    className="justify-content-center text-center"
                    style={{
                        fontFamily: "sora",
                        width: "40%",
                        minWidth: "500px",
                    }}
                >
                    <FormLabel>Name</FormLabel>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" >👤</InputGroup.Text>
                        <FormControl
                            placeholder="Full Name"
                            aria-label="Full Name"
                            aria-describedby="basic-addon1"
                            ref={name}
                            type="text"
                        />
                    </InputGroup>
                    <FormLabel>Mobile No.</FormLabel>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">☎️</InputGroup.Text>
                        <FormControl
                            placeholder="Phone No."
                            aria-label="Phone No."
                            aria-describedby="basic-addon1"
                            ref={phoneRef}
                            type="number"
                        />
                    </InputGroup>
                    <FormLabel>Email</FormLabel>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">✉️</InputGroup.Text>
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            ref={email}
                            type="email"
                        />
                    </InputGroup>
                    {verified && (
                        <div>
                            <FormLabel>OTP</FormLabel>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                    ✔
                                </InputGroup.Text>
                                <FormControl
                                    placeholder="OTP"
                                    aria-label="OTP"
                                    aria-describedby="basic-addon1"
                                    ref={otpRef}
                                    type="number"
                                />
                            </InputGroup>
                        </div>
                    )}
                    {!verified && (
                        <Button
                            variant="primary"
                            style={{
                                padding: "0.5em 2em",
                                fontFamily: "sora",
                                fontSize: "1.2em",
                            }}
                            onClick={submitHandler}
                        >
                            Register
                        </Button>
                    )}
                    {verified && (
                        <Button
                            variant="primary"
                            style={{
                                padding: "0.5em 2em",
                                fontFamily: "sora",
                                fontSize: "1.2em",
                            }}
                            onClick={otpSubmit}
                        >
                            Submit OTP
                        </Button>
                    )}
                </Container>
            </Stack>
            <Navbar
                className="p-0"
                fixed="bottom"
                style={{ boxShadow: "0px -4px 48px -12px rgba(0,0,0,0.1)" }}
            >
                <Container className="justify-content-center">
                    <Navbar.Brand className="p-0">
                        <Image src={Logo} height={100} />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Signin;
