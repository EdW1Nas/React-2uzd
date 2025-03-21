import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <HomePageContainer>
            <Title>Pleases Log In / Register</Title>
            <TaskGrid>
                <TaskCard>
                    <TaskButton to="/login">Login</TaskButton>
                </TaskCard>
                <TaskCard>
                    <TaskButton to="/register">Register</TaskButton>
                </TaskCard>
            </TaskGrid>
        </HomePageContainer>
    );
};

export default HomePage;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #6a11cb, #331652);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 100px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const TaskGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const TaskCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  min-width: 250px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const TaskButton = styled(Link)`
  display: inline-block;
  background: #6a11cb;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.3s ease;

  &:hover {
    background: #9076db;
  }
`;