import React, { Component } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

import '../styles/download.module.scss'

import content from '../content/download'
import SEO from '../components/seo'
import Button from '../components/Button'

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
    if (navigator.appVersion.indexOf('Android') !== -1) OSName = 'android'
    if (navigator.appVersion.indexOf('iPhone') !== -1) OSName = 'iOS'
    if (navigator.appVersion.indexOf('iPad') !== -1) OSName = 'iOS'

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
      <div className="page">
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
                    {OS.downloads.alternatives &&
                      OS.downloads.alternatives.map(alternativeDownload => {
                        return (
                          <a
                            href={alternativeDownload.url}
                            download={alternativeDownload.directDownload}
                            key={alternativeDownload.url}
                            target={
                              alternativeDownload.directDownload
                                ? '_self'
                                : '_blank'
                            }
                            onClick={this.setupRedirect}
                          >
                            {alternativeDownload.name}
                          </a>
                        )
                      })}
                  </div>
                </li>
              )
            })}
          </ul>

          {selectedOs &&
            selectedOs.downloads &&
            (_.isEmpty(selectedOs.downloads.default) ? (
              <Button styleName="download__btn" round disabled>
                Coming Soon {selectedOs ? `For ${selectedOs.name}` : ''}
              </Button>
            ) : (
              <Button
                styleName="download__btn"
                tag="a"
                href={selectedOs.downloads.default.url}
                onClick={this.setupRedirect}
                download={selectedOs.downloads.default.directDownload}
                target={
                  selectedOs.downloads.default.directDownload
                    ? '_self'
                    : '_blank'
                }
                round
              >
                Download for {selectedOs.name}
              </Button>
            ))}
        </div>
        {selectedOs && !_.isEmpty(selectedOs.setupSteps) && (
          <div styleName="setup" ref={this.setupRef} className="container">
            <div className="container page__header">
              <h2>UserLAnd Setup</h2>
            </div>
            <ol styleName="setup__steps">
              {selectedOs.setupSteps.map((step, i) => {
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
        )}
      </div>
    )
  }
}

export default downloadPage
