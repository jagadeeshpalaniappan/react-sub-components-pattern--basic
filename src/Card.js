import React, { Component } from "react";
import getReactChildrenMap from "./utils/getReactChildrenMap";

// private: sub-component

const Header = props => (
  <div className={`card-header ${props.color === "primary" && "text-primary"}`}>
    {props.children}
  </div>
);
const Footer = props => <div className="card-footer">{props.children}</div>;

const Title = props => <h5 className="card-title">{props.children}</h5>;
const Text = props => <p className="card-text">{props.children}</p>;
class Body extends Component {
  render() {
    const { reactChildren, otherChildren } = getReactChildrenMap(this.props.children);
    console.log(reactChildren);
    return (
      <div className="card-body" style={{ width: "18rem" }}>
        {reactChildren.Title && <Title>{reactChildren.Title.props.children}</Title>}
        {reactChildren.Text && <Text>{reactChildren.Text.props.children}</Text>}
        {otherChildren}
      </div>
    );
  }
}
// or - you can directly populate the children
// const Body = props => <div className="card-body">{props.children}</div>;

class Card extends Component {
  render() {
    const { reactChildren } = getReactChildrenMap(this.props.children);
    // console.log(reactChildren);

    const color = "primary";
    return (
      <div className="card mt-3" style={{ width: "18rem" }}>
        {reactChildren.Header && (
          <Header color={color}>{reactChildren.Header.props.children}</Header>
        )}
        {reactChildren.Body && <Body>{reactChildren.Body.props.children}</Body>}
        {reactChildren.Footer && <Footer>{reactChildren.Footer.props.children}</Footer>}
      </div>
    );
  }
}

// Lastly we expose the Title sub-component through Card

Card.Body = Body;
Card.Body.Title = Title;
Card.Body.Text = Text;
Card.Header = Header;
Card.Footer = Footer;

export default Card;
