import React from "react";
import { Col, Row } from "../Grid";


export function NewsCard({ cardTitle, cardText, cardSub, cardSub2, cardTextColor, cardLink, cardColor, cardAction, colSize, children }){
    return (
        <Row>
            <Col size={colSize}>
                <div className={ 'card z-depth-2 ' + cardColor }>
                    <div className={'card-content ' + cardTextColor }>
                        <span class="card-title"><h4>{ cardTitle }</h4></span>
                        <span class="card-sub"><h5> { cardSub }</h5><h6>Posted on: { cardSub2 }</h6></span>
                        <p>{ cardText }</p>
                        <div class="card-action">
                            {/* <a href={cardLink}>Read</a> */}
                            { cardAction }
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export function CardOutline({ cardColor, colSize, cardTextColor, children }) {
    return (
        <Row>
            <Col size={colSize}>
                <div className={ 'card z-depth-2 ' + cardColor }>
                    <div className={'card-content ' + cardTextColor }>
                        {children}
                    </div>
                </div>
            </Col>
        </Row>
    );
  }