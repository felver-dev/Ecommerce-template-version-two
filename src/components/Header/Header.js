import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Offcanvas from "./Offcanvas";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateOffcanvas: false
    };
    this.getMenuActiveStatus = this.getMenuActiveStatus.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClickOffcanvas(e) {
    e.preventDefault();
    this.setState({ activateOffcanvas: !this.state.activateOffcanvas });
  }

  getMenuActiveStatus(status) {
    this.setState({
      activateOffcanvas: status
    });
  }

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("header");
    this.setState({ top: el.offsetTop });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `123px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <header
        className={`sticker ${
          this.state.scroll > this.state.top ? "stick" : ""
        }`}
      >
        <div className="header-wrapper">
          <div className="container space-y--15">
            <div className="row align-items-center">
              <div className="col-6">
                {/* header logo */}
                <div className="header-logo">
                  <Link to={process.env.PUBLIC_URL + "/home"}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo-2.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-6 text-right">
                {/* header menu trigger */}
                <button
                  className="header-menu-trigger"
                  onClick={(e) => this.handleClickOffcanvas(e)}
                >
                  <ReactSVG
                    src={
                      process.env.PUBLIC_URL + "/assets/img/icons/menu-2.svg"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                {/* header search */}
                <div className="header-search space-pb--15">
                  <form>
                    <input type="text" placeholder="Search anything" />
                    <ReactSVG
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/icons/search-2.svg"
                      }
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* offcanvas menu */}
        <Offcanvas
          show={this.state.activateOffcanvas}
          activeStatus={this.getMenuActiveStatus}
        />
      </header>
    );
  }
}

export default Header;
