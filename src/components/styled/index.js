import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #d2ffd5;
  width: 100%;
  padding: 30px 0;
`;
export const MainBox = styled.div`
  width: 90%;
  height: 100%;
  padding: 40px 30px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  text-align: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    outline: none;
    color: black;
  }
  & a:focus {
    color: black;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;
export const CircleLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(29, 161, 242, 0.2);
  border-left-color: rgb(101, 255, 0);
  background: transparent;
  animation: rotate-s-loader 1s linear infinite;
  margin: auto;

  @keyframes rotate-s-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Card = styled.div`
  margin-right: 30px;
  width: 35%;
  border: 1px solid lightgray;
  padding: 20px 30px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const Avatar = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: lightgray;
  text-align: center;
  line-height: 150px;
  font-size: 49px;
  font-weight: bold;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const AddPost = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 30%;
  height: 140px;
  background-color: lightgray;
  padding: 30px;
  border-radius: 10px;

  & input {
    margin-top: 5px;
    padding: 10px;
    font-size: 24px;
  }
  & div {
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
  }
  & span {
    display: flex;
    justify-content: space-between;
  }
`;
export const Error = styled.div`
  color: red;
  font-size: 14px;
  font-weight: bold;
  cursor: default !important;
`;
export const StyledButton = styled.button`
  background: #d2ffd5;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 24px;
  color: #5a5a5a;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #9beea1;
    color: white;
  }
`;
