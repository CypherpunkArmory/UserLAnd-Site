import React, { Component } from 'react'
import { navigate } from 'gatsby'

import '../styles/pricing.module.scss'

import SEO from '../components/seo'
import PricingTable from '../components/Table/PricingTable'
import Switch from '../components/Switch'

export default class PricingPage extends Component {
  state = {
    width: undefined,
    discountBase: 0,
  }

  toggleDiscount = () => {
    const { discountBase } = this.state

    discountBase === 0
      ? this.setState({ discountBase: 20 })
      : this.setState({ discountBase: 0 })
  }

  componentWillMount = () => {
    this.updateDimensions()
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    let width
    if (typeof window !== 'undefined') {
      const w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0]
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth
    }

    this.setState({ width })
  }

  render() {
    const { discountBase } = this.state
    const navigateToBilling = () => {
      navigate('/account/billing')
      return
    }
    const plans = [
      {
        title: 'Beta',
        price: 'Free',
        handler: navigateToBilling,
        features: [
          {
            name: 'HTTP/HTTPS Support',
            value: true,
          },
          {
            name: 'TCP Support',
            value: true,
          },
          {
            name: 'Custom/Reserved Subdomains',
            value: 1,
          },
          {
            name: 'Custom Domains',
            value: false,
          },
          {
            name: 'Punch Processes',
            value: 2,
          },
          {
            name: 'Ports per Process',
            value: 'no limit',
          },
          {
            name: 'Data Rate',
            value: '1000kBps',
          },
          {
            name: 'End-to-end TLS Tunnels',
            value: true,
          },
        ],
      },
      {
        title: 'Free',
        price: 'Free',
        discountBase: discountBase,
        handler: navigateToBilling,
        features: [
          {
            name: 'HTTP/HTTPS Support',
            value: true,
          },
          {
            name: 'TCP Support',
            value: true,
          },
          {
            name: 'Custom/Reserved Subdomains',
            value: false,
          },
          {
            name: 'Custom Domains',
            value: false,
          },
          {
            name: 'Punch Processes',
            value: 1,
          },
          {
            name: 'Ports per Process',
            value: 'no limit',
          },
          {
            name: 'Data Rate',
            value: '100kBps',
          },
          {
            name: 'End-to-end TLS Tunnels',
            value: true,
          },
        ],
      },
      {
        title: 'Pro',
        price: 'TBD',
        discountBase: discountBase,
        handler: navigateToBilling,
        features: [
          {
            name: 'HTTP/HTTPS Support',
            value: true,
          },
          {
            name: 'TCP Support',
            value: true,
          },
          {
            name: 'Custom/Reserved Subdomains',
            value: true,
          },
          {
            name: 'Custom Domains',
            value: 'true',
          },
          {
            name: 'Punch Processes',
            value: 'TBD',
          },
          {
            name: 'Ports per Process',
            value: 'no limit',
          },
          {
            name: 'Data Rate',
            value: 'TBD',
          },
          {
            name: 'End-to-end TLS Tunnels',
            value: true,
          },
        ],
      },
    ]

    return (
      <>
        <SEO title="UserLAnd Pricing" />
        <div className="container page__header">
          <h2>Pick the plan that meets your needs</h2>
          <p>
            Simply sign up for a plan and use linux anywhere. <br />
            You can upgrade anytime.
          </p>
        </div>
        <div className="container features">
          {false && (
            <div styleName="yearly-widget">
              Monthly Billing <Switch handlesClick={this.toggleDiscount} />{' '}
              <span styleName="yearly-widget__highlight">
                Yearly Billing
                <span styleName="yearly-widget__badge">
                  Save {this.state.discountBase}%
                </span>
              </span>
            </div>
          )}
          {this.state.width < 600 ? (
            plans.map((plan, i) => <PricingTable key={i} plans={[plan]} />)
          ) : (
            <PricingTable plans={plans} />
          )}
        </div>
      </>
    )
  }
}
