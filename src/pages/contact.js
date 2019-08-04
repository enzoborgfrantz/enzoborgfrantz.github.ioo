import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContactForm } from "../components/ContactForm"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactForm />
  </Layout>
)

export default Contact
