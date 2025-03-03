import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 20px;
      font-weight: 600;
    `};
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 18px;
      font-weight: 400;
    `}
`;
export default Heading;
