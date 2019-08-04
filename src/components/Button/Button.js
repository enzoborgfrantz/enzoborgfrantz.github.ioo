import React from "react"
import styled from "styled-components"

const ButtonStyle = styled.button`
  appearance: none;
  background-color: #cadefc;
  border: none;
  border-radius: 4px;
  box-shadow: inset -3px -4px 0 #c3bef0;
  box-sizing: border-box;
  color: white;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 10px;
  transition: all 0.2s ease-in;
  width: 100%;
  height: 38px;
  line-height: 0px;
  font-family: system-ui;
  &:hover {
    cursor: pointer;
    background-color: #c3bef0;
    box-shadow: inset -3px -4px 0 #cca8e9;
  }
  &:active {
    box-shadow: none;
  }
`

export const Button = ({ children, type }) => (
  <ButtonStyle type={type}>{children}</ButtonStyle>
)
