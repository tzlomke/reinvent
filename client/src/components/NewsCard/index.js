import React from "react";
import { Col, Row, Container } from "../Grid";


export function NewsCard({ cardTitle, cardText, cardSub, cardTextColor, cardLink, cardColor, cardAction, colSize, children }){
    return (
        <Row>
            <Col size={colSize}>
                <div className={ 'card ' + cardColor }>
                    <div className={'card-content ' + cardTextColor }>
                        <span class="card-title">{ cardTitle }</span>
                        <span class="card-sub"><h6>by: { cardSub }</h6></span>
                        <p>{ cardText }</p>
                        <div class="card-action">
                            {/* <a href={cardLink}>Read</a> */}
                            { cardAction }
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}