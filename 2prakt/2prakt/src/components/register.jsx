import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const userData = {
            email,
            name,
            password,
        };

        try {

            const emailCheck = await fetch("http://localhost:5000/users?email=" + email);

            const existingUsers = await emailCheck.json();
            if (existingUsers.length > 0) {

                alert("User already exists!");
                return;
            }
            else {

            
            const res = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

           
            if (res.ok) {
                alert("User registered successfully!");
            } else {
                alert("Error registering user.");
            }

}
        }

        catch (error) {
            console.error("Error:", error);
        }


    };

    
    return (
        <RegisterContainer>
            <BackButton to="/">Back to Main Page</BackButton>
            <RegisterForm onSubmit={handleSubmit}>
                <Title>Register</Title>
                <Input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Register</Button>
            </RegisterForm>
        </RegisterContainer>
    );
};

export default Register;


const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #6a11cb, #331652);
  position: relative;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.3);
  padding: 10px 15px;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: background 0.3s;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  text-align: center;
`;

const Button = styled.button`
  background: #6a11cb;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  border: none;
  outline: none;

  &:hover {
    background: #9076db;
  }
`;