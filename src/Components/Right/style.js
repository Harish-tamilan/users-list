import styled from "styled-components";

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  font-family: "Heebo", "Roboto", sans-serif;
  width: 80%;
  .input {
    width: 16em;
    height: 2em;
  }
  .select {
    height: 2.5em;
    width: 16em;
  }
  .email {
    min-width: 37em;
    height: 2em;
  }
  .state {
    min-width: 37em;
    height: 2.5em;
  }
  .ast {
    color: red;
  }
  .error {
    color: red;
  }
`;

export const Heading = styled.h3``;

export const Text = styled.h4``;

export const FlexRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  column-gap: ${(props) => (props.colgap ? props.colgap : "normal")};
`;

export const Button = styled.div`
  margin-top: 1em;
  background-color: #ffba00;
  border-radius: 0.14286rem;
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Heebo", "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 0.05rem;
  width: 20%;
  padding: 1rem 3rem 0.85714rem 1.78571rem;
  position: relative;
`;
