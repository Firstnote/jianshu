import styled from "@emotion/styled";

const CustomText = styled.h6`
  display: flex;
  justify-content: space-around;
  align-items: center;
  &::before {
    content: "";
    border-top: 1px solid #b5b5b5;
    border-bottom: 1px solid #b5b5b5;
    display: block;
    width: 60px;
    height: 0px;
  }
  &::after {
    content: "";
    border-top: 1px solid #b5b5b5;
    border-bottom: 1px solid #b5b5b5;
    display: block;
    width: 60px;
    height: 0px;
  }
`;

export default CustomText;
