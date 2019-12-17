import React, { Component } from 'react'
import _ from 'lodash'

import './Table.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

const calcDiscount = (price, discountBase) => {
  const discounted = (discountBase / 100) * price
  return price - discounted
}

const PricingPlan = ({ title, price, handler, discountBase }) => {
  const yearlyPrice = price * 12

  return (
    <th styleName="plan">
      <p styleName="plan__title">{title}</p>
      <p styleName="plan__price">
        {isNaN(price) ? (price) : (
          <>
            ${calcDiscount(price, discountBase)}
            <span>/month</span>
          </>
        )}
      </p>
      <p styleName="plan__discount">
        {discountBase > 0 && (
          <>
            <span>${yearlyPrice}/Year</span>$
            {calcDiscount(yearlyPrice, discountBase)}/Year
          </>
        )}
      </p>
      {handler && (
        <Button className="mb-3" onClick={handler} disabled={title === 'Beta' ? false : true} round>
          Sign up
        </Button>
      )}
    </th>
  )
}

const PricingFeature = ({ name = 'feature', value = [] }) => {
  return (
    <tr styleName="feature">
      <td styleName="feature__name">{name}</td>
      {value.map((item, i) => {
        const elem = _.isBoolean(item) ? (
          <FontAwesomeIcon icon={item ? faCheck : faMinus} />
        ) : (
          item
        )
        return (
          <td styleName="feature__value" key={i}>
            {elem}
          </td>
        )
      })}
    </tr>
  )
}

export default class PricingTable extends Component {
  render() {
    const { plans } = this.props

    const planFeatures = plans.reduce((features, nextPlan) => {
      if (!features) {
        return nextPlan.features
      }
      return [...features, ...nextPlan.features]
    }, [])

    const mergeFeatures = array => {
      let seen = []
      array.map(elem => {
        if (_.find(seen, ['name', elem.name])) {
          const index = _.findIndex(seen, ['name', elem.name])
          return seen[index].value = [...seen[index].value, elem.value]
        }
        return seen = [...seen, { ...elem, value: [elem.value] }]
      })

      return seen
    }

    let groupedFeatures = mergeFeatures(planFeatures)

    return (
      <table styleName="table pricing-table">
        <thead styleName="thead">
          <tr>
            <th> </th>
            {plans.map((plan, i) => {
              return <PricingPlan key={i} {...plan} />
            })}
          </tr>
        </thead>
        <tbody styleName="tbody">
          {groupedFeatures.map((feature, i) => {
            return <PricingFeature key={i} {...feature} />
          })}
        </tbody>
      </table>
    )
  }
}
