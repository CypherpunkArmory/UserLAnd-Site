import React from 'react'
import SEO from '../components/seo'
import LoginForm from '../components/Login/LoginForm'

export default function loginPage() {
  return (
    <div className="page">
      <SEO title="Userland Site" />
      <div className="container page__header">
        <h2 className="page__title">Log In</h2>
      </div>
      <div className="container text-center">
        <LoginForm />
      </div>
    </div>
  )
}
