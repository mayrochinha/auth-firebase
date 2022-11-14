import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const UserProfile = () => {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();
    
    async function handleLogout() {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            alert("Ocorreu um erro ao tentar efetuar o logout");
        }
    }
    
    
    return (
        <div className="container">
            <h1>User Profile</h1>

            <button onClick={handleLogout}>Log Out</button>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ currentUser.email }</td>
                        <td>Atualizar perfil do usuário</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};