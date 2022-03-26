import React, { Fragment } from "react";

import {
  Button,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./style.css";

function Corpo(props) {
  return (
    <>
      <Fragment>
        <div className="center">
          <div className="imagemBot">
            {" "}
            <img
              src="https://caiqueoliver.github.io/landingpage/bot-imagem.png"
              alt="imagemBot"
              className="imagemBot2"
            ></img>
          </div>
          <div className="bot">
            <CardGroup>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#b0c4de",
                  borderColor: "#b0c4de",
                  border: "solid 3px #000",
                  borderRadius: "10px",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://caiqueoliver.github.io/landingpage/discord-bot.png"
                  top
                  width="90%"
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#000" }}>
                    Card title
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText className="text">
                    Olá, esse BOT foi desenvolvido com o intuíto de ajudar a
                    comunidade DEV
                  </CardText>
                </CardBody>
              </Card>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#b0c4de",
                  borderColor: "#b0c4de",
                  border: "solid 3px #000",
                  borderRadius: "10px",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://caiqueoliver.github.io/landingpage/card-bot.png"
                  top
                  width="90%"
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#000" }}>
                    Card title
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText className="text">
                    BOT traz várias funcionalidades tais como: Comandos
                    automatizados.
                  </CardText>
                </CardBody>
              </Card>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#b0c4de",
                  borderColor: "#b0c4de",
                  border: "solid 3px #000",
                  borderRadius: "10px",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://caiqueoliver.github.io/landingpage/Char-bot-bots.png"
                  top
                  width="70px"
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#000" }}>
                    Card title
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText className="text">
                    BOT totalmente personalizável.
                  </CardText>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        </div>
        <div className="button">
          <Button active color="dark" size="lg">
            <a
              href="https://github.com/CaiqueOliver/"
              style={{ textDecoration: "none", color: "#b0c4de" }}
            >
              Clique Aqui
            </a>
          </Button>
        </div>
      </Fragment>
    </>
  );
}

export default Corpo;
