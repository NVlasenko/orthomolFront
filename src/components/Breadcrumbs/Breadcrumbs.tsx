import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.scss";

type BreadcrumbsProps = {
  paths: { name: string; path?: string }[];
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav className="breadcrumbs">
      {paths.map((item, index) => (
        <span key={index} className="breadcrumbs__item">
          {item.path ? (
            <Link to={item.path} className="breadcrumbs__link">
              {item.name}
            </Link>
          ) : (
            <span className="breadcrumbs__current">{item.name}</span>
          )}
          {index < paths.length - 1 && <span className="breadcrumbs__separator">›</span>}
        </span>
      ))}
    </nav>
  );
};
