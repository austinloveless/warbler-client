import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>Hi working</h1>
                <h4>New to Warbler</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign Up here!
                </Link>
            </div>
        );
    }
    return (
        <div>
            <MessageTimeline />
        </div>
    );
};

export default Homepage;