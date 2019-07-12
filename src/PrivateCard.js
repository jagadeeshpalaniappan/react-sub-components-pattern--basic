import React, { Component } from "react";
import getReactChildrenMap from "./utils/getReactChildrenMap";

// private: sub-component

const PrivateHeader = props => (
  <div className={`card-header ${props.color === "primary" && "text-primary"}`}>
    {props.children}
  </div>
);
const PrivateFooter = props => <div className="card-footer">{props.children}</div>;

const PrivateTitle = props => <h5 className="card-title">{props.children}</h5>;
const PrivateText = props => <p className="card-text">{props.children}</p>;

class PrivateBody extends Component {
  render() {
    const { reactChildren, otherChildren } = getReactChildrenMap(this.props.children);
    console.log(reactChildren);
    return (
      <div className="card-body" style={{ width: "18rem" }}>
        {reactChildren.Title && <PrivateTitle>{reactChildren.Title.props.children}</PrivateTitle>}
        {reactChildren.Text && <PrivateText>{reactChildren.Text.props.children}</PrivateText>}
        {otherChildren}
      </div>
    );
  }
}

class Card extends Component {
  render() {
    const { reactChildren } = getReactChildrenMap(this.props.children);
    // console.log(reactChildren);

    const color = "primary";
    return (
      <div className="card mt-3" style={{ width: "18rem" }}>
        {reactChildren.Header && (
          <PrivateHeader color={color}>{reactChildren.Header.props.children}</PrivateHeader>
        )}
        {reactChildren.Body && <PrivateBody>{reactChildren.Body.props.children}</PrivateBody>}
        {reactChildren.Footer && (
          <PrivateFooter>{reactChildren.Footer.props.children}</PrivateFooter>
        )}
      </div>
    );
  }
}

// Actual sub-components are not exposed outside (private)
// we expose the dummy sub-components
const Body = () => null;
const Title = () => null;
const Text = () => null;
const Header = () => null;
const Footer = () => null;
Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;
Card.Body.Title = Title;
Card.Body.Text = Text;

export default Card;
