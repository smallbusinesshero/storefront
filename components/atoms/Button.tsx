import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CustomButton = styled(Button)`
  background-color: #2a2a2a;
  color: #eee;
  border-radius: 0;
  box-shadow: none;
  &:hover {
    background-color: #2a2a2a;
  }
`;

export const CustomButtonHighlight = styled(CustomButton)`
  font-family: "Montserrat";
  background-color: #19ae9d;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #006174;
  }
`;
