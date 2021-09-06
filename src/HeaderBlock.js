import React from 'react';
import "./HeaderBlock.css"

const HeaderBlock = () => {
    return (
        <div className="headerBlock">
            <div className="headerBlock__info">
                <div className="headerBlock__infoText">
                    <h1>Model 3</h1>
                    <h4>Order online for <span>Touchless Delivery</span></h4>
                </div>
                <div className="headerBlock_actions">
                    <button className="headerBlock__buttonPrimary">
                        custom order
                    </button>
                    <button className="headerBlock__buttonSecondary">
                        existing inventory
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock
