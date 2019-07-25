import React from 'react'
import SEO from '../components/seo'
import SignupForm from '../components/Signup/SignupForm'

export default function signupPage() {
  return (
    <div className="page">
      <SEO title="Userland Sign up" />
      <div className="container page__header">
        <h2 className="page__title">Sign Up</h2>
      </div>
      <div className="container">
        <SignupForm />
      </div>
    </div>
  )
}
