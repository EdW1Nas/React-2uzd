import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import styled from "styled-components";
import { Link } from "react-router-dom";
function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const loginCheck = await fetch("http://localhost:5000/users?name=" + name);

            const users = await loginCheck.json();
            if (users.length === 0) {

                alert("User not found!");
            }
            else if (users[0].password === password) {
                alert("Login successful!");
                login(users[0]);
                //localStorage.setItem("user", JSON.stringify(users[0]));
                navigate("/dashboard");
            } 


            else {
                alert("Incorrect password!");
            }
     

      
        } catch (error) {
            console.error("Error:", error);
        }
    };





    return (
        <LoginContainer>
            <BackButton to="/">Back to Main Page</BackButton>
            <LoginForm onSubmit={handleSubmit}>
                <Title>Login</Title>
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
                <Button type="submit">Login</Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
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

const LoginForm = styled.form`
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