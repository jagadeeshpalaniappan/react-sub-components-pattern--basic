import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import PrivateCard from "./PrivateCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const CardsContainer = () => {
  return (
    <>
      <Card>
        <Card.Header>My Header</Card.Header>
        <Card.Body>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>My Header</Card.Header>
        <Card.Body>
          <Card.Body.Title>My Article Title</Card.Body.Title>
          <Card.Body.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Body.Text>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </Card.Body>
        <Card.Footer>My Footer</Card.Footer>
      </Card>
    </>
  );
};

const PrivateCardsContainer = () => {
  return (
    <>
      <PrivateCard>
        <PrivateCard.Header>My Header1</PrivateCard.Header>
        <PrivateCard.Body>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere111
          </a>
        </PrivateCard.Body>
      </PrivateCard>
      <PrivateCard>
        <PrivateCard.Header>My Header</PrivateCard.Header>
        <PrivateCard.Body>
          <PrivateCard.Body.Title>My Article Title</PrivateCard.Body.Title>
          <PrivateCard.Body.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.111
          </PrivateCard.Body.Text>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </PrivateCard.Body>
        <PrivateCard.Footer>My Footer</PrivateCard.Footer>
      </PrivateCard>

      {/* NOTE: Card.Header will work, since this component exposed to outside  */}
      {/* <Card.Header>My Header</Card.Header> */}
      {/* NOTE: PrivateCard.Heade will NOT work, since this component NOT exposed to outside  (private component) */}
      {/* <PrivateCard.Header>My Header1</PrivateCard.Header> */}
    </>
  );
};

function App() {
  console.dir(Card);

  return (
    <div className="container pt-2">
      {/* <CardsContainer /> */}
      <PrivateCardsContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
