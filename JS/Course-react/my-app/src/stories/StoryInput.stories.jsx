import React from "react";
import StoryInput from "../component/StoryInput";

export default {
  component: StoryInput,
  title: "Component/Input",
};

export const Input = (args) => <StoryInput name="text" {...args} />;

export const InputTest = (args) => (
  <StoryInput
    name="text"
    label="라벨"
    type="text"
    errorMessage="최대길이는 10자 입니다."
  ></StoryInput>
);