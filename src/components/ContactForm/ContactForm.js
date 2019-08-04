import React from "react"
import styled from "styled-components"
import { Formik, Field } from "formik"

import { Button } from "../Button"
import { Input } from "../Input"

const formResponseUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfkJaSRyMn_PIIfWp2QfFJMN1LJPvQ25bfoNrTb_j7VAIvoQ/formResponse"
const nameFieldId = "665023160"
const emailFieldId = "589966967"
const messageFieldId = "1227936865"

const ContactFormWrapper = styled.div``

const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    > * {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
`

export const ContactForm = () => (
  <ContactFormWrapper>
    <h1>Contact me</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
    >
      {() => (
        <form action={formResponseUrl} target="hidden_iframe">
          <Row>
            <Field name="name">
              {() => (
                <Input
                  type="text"
                  placeholder="name"
                  name={`entry.${nameFieldId}`}
                  id={`entry.${nameFieldId}`}
                />
              )}
            </Field>
            <Field name="email">
              {() => (
                <Input
                  type="email"
                  placeholder="email"
                  name={`entry.${emailFieldId}`}
                  id={`entry.${emailFieldId}`}
                />
              )}
            </Field>
          </Row>
          <Field name="message">
            {() => (
              <Input
                as="textarea"
                type="message"
                placeholder="message"
                name={`entry.${messageFieldId}`}
                id={`entry.${messageFieldId}`}
              />
            )}
          </Field>
          <br />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
    <iframe
      title="google_form_prevent_submit"
      name="hidden_iframe"
      id="hidden_iframe"
      style={{ display: "none" }}
      onload={() => {
        if (false) {
        }
      }}
    ></iframe>
  </ContactFormWrapper>
)
