import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const ref = useRef();
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/" >
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>
            {/* Accounts */}
            <li>
              <Link to="/#" className="has-arrow">
              <i className="bx bx-user-circle"></i>
                <span>{props.t("Accounts")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/userList">
                  <i className="bx bxs-user-detail"></i>
                    {props.t("All Users")}
                    </Link>
                </li>
                <li>
                  <Link to="/bidder-list"><i className="bx bx-user-circle"></i>{props.t("Bider")} </Link>
                </li>
                <li>
                  <Link to="/auctioneer-list"><i className="bx bx-store"></i>{props.t("Auctioneer")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="bx bx-detail"></i>{props.t("Trade Licenses")} </Link>
                </li>
           
              </ul>
            </li>
            {/* Auctions */}
            <li>
              <Link to="/#" className="has-arrow ">
                <span>{props.t("Auctions")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
               
                  <Link to="/auction-house-list">
                  <i className="bx bx-calendar"></i>
                    {props.t("Auctions")}
                    </Link>
                </li>
                <li>
                  <Link to="/#"><i className="bx bx-chat"></i>{props.t("Lots")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="bx bx-detail"></i>{props.t("Products")} </Link>
                </li>
           
              </ul>
            </li>

            {/* Finance */}

            <li>
              <Link to="/#" className="has-arrow ">
                <span>{props.t("Finance")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
               
                  <Link to="/#">
                  <i className="bx bxs-user-detail"></i>
                    {props.t("Invoices")}
                    </Link>
                </li>
                <li>
                  <Link to="/#"><i className="bx bx-user-circle"></i>{props.t("Payments")} </Link>
                </li>
              </ul>
            </li>
            {/* Config */}
             {/* Finance */}

             <li>
              <Link to="/#" className="has-arrow ">
                <span>{props.t("Configurations")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
               
                  <Link to="/Configuration">
                  <i className="bx bxs-user-detail"></i>
                    {props.t("Auction Config")}
                    </Link>
                </li>
                <li>
                  <Link to="/#"><i className="bx bx-user-circle"></i>{props.t("Payments")} </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
