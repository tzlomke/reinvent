import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="collection with-header">{children}</ul>
    </div>
  );
}
export function ListHeader({ children }) {
  return <li className="collection-header">{children}</li>;
}
export function ListItem({ children }) {
  return <li className="collection-item">{children}</li>;
}
