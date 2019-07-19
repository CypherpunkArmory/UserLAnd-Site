import React, { Component } from 'react'
import classnames from 'classnames'

import '../styles/download.module.scss'

import content from '../content/download'
import SEO from '../components/seo'
import Button from '../components/Button'
import Layout from '../components/layout'

class downloadPage extends Component {
  setupRef = React.createRef()

  state = {
    selectedOs: undefined,
  }

  componentDidMount() {
    let OSName = undefined
    if (navigator.appVersion.indexOf('Win') !== -1) OSName = 'win'
    if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 'mac'
    if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 'linux'

    this.setState({
      selectedOs: content.supportedOS.find(OS => OS.id === OSName),
    })
  }

  setupRedirect = () => {
    window.scrollTo({
      top: this.setupRef.current.offsetTop,
      behavior: 'smooth', // Optional, adds animation
    })
  }

  setPlatform = OSName => {
    this.setState({
      selectedOs: content.supportedOS.find(OS => OS.id === OSName),
    })
  }

  render() {
    const { selectedOs } = this.state

    return (
      <Layout className="page">
        <SEO title="Userland Download" />
        <div className="container page__header">
          <h2 className="page__title">{content.pageTitle}</h2>
          <p>{content.pageSubtitle}</p>
        </div>
        <div styleName="download" className="container">
          <ul styleName="download__list">
            {content.supportedOS.map(OS => {
              return (
                <li
                  styleName={classnames('platform', {
                    platform_active: selectedOs && selectedOs.id === OS.id,
                  })}
                  key={OS.id}
                >
                  <div styleName="icon" onClick={() => this.setPlatform(OS.id)}>
                    <OS.icon />
                    <h6>{OS.name}</h6>
                  </div>
                  <div styleName="platform__alternatives">
                    <a
                      href={OS.downloadLinks['32']}
                      download
                      onClick={this.setupRedirect}
                    >
                      32-bit
                    </a>
                    <a
                      href={OS.downloadLinks['64']}
                      download
                      onClick={this.setupRedirect}
                    >
                      64-bit
                    </a>
                    {OS.name === 'Linux' ? (
                      <>
                        <a
                          href={OS.downloadLinks['arm']}
                          download
                          onClick={this.setupRedirect}
                        >
                          ARM
                        </a>
                        <a
                          href={OS.downloadLinks['arm64']}
                          download
                          onClick={this.setupRedirect}
                        >
                          ARM64
                        </a>
                      </>
                    ) : (
                      ' '
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
          {selectedOs && (
            <Button
              styleName="download__btn"
              tag="a"
              href={selectedOs.downloadLinks['64']}
              onClick={this.setupRedirect}
              download
              round
            >
              Download for {selectedOs.name}
            </Button>
          )}
        </div>
        <div styleName="setup" ref={this.setupRef} className="container">
          <div className="container page__header">
            <h2>Holepunch Setup</h2>
          </div>
          <ol styleName="setup__steps">
            {content.setupSteps.map((step, i) => {
              return (
                <li key={step.title} styleName="step">
                  <div styleName="step__head">
                    <h3>
                      <span>{i + 1}.</span>
                      {step.title}
                    </h3>
                  </div>
                  <div className="step__body">
                    {step.body.map(({ component: Component, content }, i) => {
                      return <Component key={i}>{content}</Component>
                    })}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Layout>
    )
  }
}

export default downloadPage
