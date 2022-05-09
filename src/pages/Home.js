import React from "react";
import { Container, Image, Navbar, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import "../styles/Home.css";

const Home = () => {
    return (
        <div>
            <Stack gap={3} className="main" style={{width: "100%"}}>
                <Container
                    className="justify-content-center align-items-center"
                >
                    <h1
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "5em",
                            fontWeight: 800,
                            textAlign: "center",
                        }}
                    >
                        Welcome to Beezhive
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
                <Container className="justify-content-center text-center">
                    <Link to={"/signin"}>
                        <Button
                            variant="primary"
                            size="lg"
                            style={{
                                padding: "0.5em 2em",
                                fontFamily: "sora",
                                fontSize: "1.2em",
                            }}
                        >
                            Sign Up
                        </Button>
                    </Link>
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

export default Home;
