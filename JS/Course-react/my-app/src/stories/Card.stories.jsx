import React from "react";
import CardComponent from "../component/CardComponent";

export default {
  component: CardComponent,
  title: "Component/Card",
};

export const Card = (args) => <CardComponent name="text" {...args} />;

export const CardTest = (args) => (
    <CardComponent />
  );