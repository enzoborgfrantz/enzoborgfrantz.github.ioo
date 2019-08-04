import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const MenuItem = styled(Link)`
  border-radius: 5px;
  color: white;
  padding: 5px 15px;
  font-family: system-ui;
  font-size: 20px;
  height: 50px;
  line-height: 40px;

  cursor: pointer;
  transition: transform 0.2s ease-in;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.1);
  }
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  white-space: nowrap;
  cursor: pointer;
  overflow-x: scroll;
  > * {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &:nth-child(1n) {
      background-color: #defcf9;
    }
    &:nth-child(2n) {
      background-color: #cadefc;
    }
    &:nth-child(3n) {
      background-color: #c3bef0;
    }
    &:nth-child(4n) {
      background-color: #cca8e9;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`
// export const MenuItem = styled(Link)`
//   border-radius: 5px;
//   color: white;
//   padding: 10px 15px;
//   font-family: system-ui;
//   cursor: pointer;
//   transition: transform 0.2s ease-in;
//   text-decoration: none;
//   &:hover {
//     transform: scale(1.1);
//   }
// `

// export const Menu = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   > * {
//     &:not(:first-child) {
//       margin-top: 10px;
//     }
//     &:nth-child(1) {
//       background-color: #defcf9;
//     }
//     &:nth-child(2) {
//       background-color: #cadefc;
//     }
//     &:nth-child(3) {
//       background-color: #c3bef0;
//     }
//     &:nth-child(4) {
//       background-color: #cca8e9;
//     }
//   }
// `
