import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function StyleLink(props) {
    return (
        <a href={props.linkTo} className="btn styBtn">{ props.btnTxt }</a>
    );
  }

  export class StyleButton extends React.Component {

    attributeCheck = () => {
      const attr= {}
      if (this.props.dataTarget) {
        attr['data-target'] = this.props.dataTarget
      }
      if (this.props.type) {
        attr.type = this.props.type
      }
      if (this.props.id) {
        attr.id = this.props.id
      }
      return attr;
    }

    render() {
      return (
        <button {...(this.attributeCheck())} 
          className={`btn styBtn 
            ${this.props.modal ? "modal-trigger" : ""} ${this.props.modalClose ? "modal-close" : ""}` 
          } 
          onClick={this.props.onClick}>
          { this.props.btnTxt }
        </button>
      )
    };
  }
  