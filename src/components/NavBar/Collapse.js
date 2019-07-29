import React from 'react'

export default function Collapse(Component) {
  class CollapseView extends Component {
    state = {
      isOpen: false,
    }
    ref = React.createRef()

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside)
    }

    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.close()
      }
    }

    handleClickOutside = event => {
      if (
        this.state.isOpen &&
        this.ref &&
        !this.ref.current.contains(event.target)
      ) {
        this.close()
      }
    }

    toggle = () => {
      document.body.classList.toggle('no-scroll')

      this.setState({
        isOpen: !this.state.isOpen,
      })
    }

    close = () => {
      document.body.classList.remove('no-scroll')

      this.setState({
        isOpen: false,
      })
    }
    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          toggle={this.toggle}
          close={this.close}
          boundaryRef={this.ref}
        />
      )
    }
  }
  return CollapseView
}
