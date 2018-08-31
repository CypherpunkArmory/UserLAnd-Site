import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../app.css';
import Error from '../errorloading/Error';
import Logo from './UserLand-Logo-Hex.png';
import Headroom from 'react-headroom';


class Header extends Component {

  state = {
    menu: false
  };

  handleClick = () => {
    this.setState(prev => {
      return { menu: !prev.menu };
    });

  };

  render() {
    const { error } = this.props;
    const { menu } = this.state;

    return (
      <Headroom>
        <header role="banner" id="header">
          <section className="head-container">

            <div className="maxwidth-wrap nav-wrap">

              {/* Navigation Logo */}
              <Link to="/" className="no-line"><img className="logo" src={Logo} alt="UserLAnd Logo"/></Link>

              <div>
                <label htmlFor="check" name="checkbox"></label>
                <input id="check" className="checkbox" type="checkbox" onClick={this.handleClick} checked={menu}/>

                <div id="burger"><span></span><span></span><span></span></div>
                <nav id="main-menu">

                  {/* Mobile Menu Logo */}
                  <Link to="/" className="no-line"><img className="mobile-logo" src={Logo} alt="UserLAnd Logo"/></Link>

                  {/* Navigation Menu */}
                  {/*<ul className="nav-ul">
                    <li><Link to="/about" href="#about" onClick={this.handleClick}>About Us</Link></li>
                    <li><Link to="/jobs" href="#jobs" onClick={this.handleClick}>Jobs</Link></li>
                  </ul>*/}
                </nav>
              </div>
            </div>
            {error && <Error error={error}/>}



          </section>
        </header>
      </Headroom>
    );
  }
}

export default connect(
  state => ({ error: state.error }),
  null
)(Header);