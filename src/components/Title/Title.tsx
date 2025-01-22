import React from "react";
import "./Title.scss";
type Props = {
  title: string;
};
export const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="title">{title}</div>
  )
}