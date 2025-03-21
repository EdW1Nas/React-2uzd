import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const { user, logout } = useAuth();

    return (
        <DashboardContainer>
            <Content>
                <Title>Welcome, {user ? user.name : ""}!</Title>
                <Button onClick={logout}>Logout</Button>
            </Content>
        </DashboardContainer>
    );
};

export default Dashboard;


const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #6a11cb, #331652);
  position: relative;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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