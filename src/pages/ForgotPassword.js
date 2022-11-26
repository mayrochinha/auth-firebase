import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ForgotPassword = () => {
    const { resetPassword } = useAuth();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        try {
            await resetPassword(email);
            alert("An email was send to reset your password");
            Navigate("/login")
        } catch {
            alert("Error to reset password");
            
        }

        setLoading(false);
    }
    
    
    
    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <form>
                <label>Email</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}    
                />
                
                <button className="button-block">Get password</button>
            </form>
            <div className="center">
                <div>
                    <p>I have an account<Link to="/Login">Sign in</Link></p>
                    <p>I have no account<Link to="/SignUp">Create account</Link></p>
                </div>
            </div>
        </div>
    );
};