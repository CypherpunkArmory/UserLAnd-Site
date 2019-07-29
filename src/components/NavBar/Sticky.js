import React from 'react'

export default function Sticky(Component) {
  class StickyView extends Component {
    state = {
      scrolled: false,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 0) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    }
    render() {
      return <Component {...this.props} {...this.state} />
    }
  }

  return StickyView
}
