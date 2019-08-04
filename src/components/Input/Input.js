import React from "react"
import styled, { css } from "styled-components"

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  ${props => props.isInvalid && `border-bottom: 2px solid red;`};
`

const mapProps = props => ({
  type: props => props.type,
  defaultValue: props => props.defaultValue,
  placeholder: props => props.placeholder,
  onFocus: props => props.onFocus,
  onBlur: props => props.onBlur,
})

const styles = css`
  background-color: transparent;
  outline: none;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 38px;
  max-height: 152px;
  box-sizing: border-box;
  font-size: 15px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 5px 5px 5px 8px;
  font-family: system-ui;

  &:focus {
    border-color: #defcf9;
  }
  &::placeholder {
    color: gray;
    font-family: system-ui;
  }
`

const StyledInput = styled.input.attrs(mapProps)`
  ${styles}
`

const StyledTextArea = styled.textarea.attrs(mapProps)`
  ${styles}
`

const SmallText = styled.div`
  font-family: system-ui;
  text-transform: capitalize;
  font-size: 10px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  ${({ visible }) =>
    visible && `transition: opacity 0.2s ease-in;`} margin-bottom: 2px;
`

export const Input = ({ as = "input", type, value, ...props }) => {
  const Component = as === "textarea" ? StyledTextArea : StyledInput
  return (
    <InputWrapper>
      <SmallText visible={value !== ""}>{props.placeholder}</SmallText>
      <Component type={type} {...props} />
    </InputWrapper>
  )
}
