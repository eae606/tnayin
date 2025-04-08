import React from "react";
import { Card } from "antd";
import Modals from "../Modal/Modals";

const { Meta } = Card;

const Cards = ({ data }) => (
  <Card
    hoverable
    style={{ width: 240, margin: "10px" }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Example Card" />
    <br></br>
    <Modals data={data} />
  </Card>
);

export default Cards;
