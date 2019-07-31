import React from "react"

const formResponseUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfkJaSRyMn_PIIfWp2QfFJMN1LJPvQ25bfoNrTb_j7VAIvoQ/formResponse"
const nameFieldId = "665023160"
const emailFieldId = "589966967"

export const ContactForm = () => (
  <>
    <form action={formResponseUrl} target="hidden_iframe">
      Name:
      <br />
      <input
        type="text"
        name={`entry.${nameFieldId}`}
        id={`entry.${nameFieldId}`}
      />
      <br />
      Email:
      <br />
      <input
        type="text"
        name={`entry.${emailFieldId}`}
        id={`entry.${emailFieldId}`}
      />
      <input type="submit" value="Submit" />
    </form>
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
  </>
)
