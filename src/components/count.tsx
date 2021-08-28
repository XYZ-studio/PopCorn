import React, { FC } from "react";
import './sass/count.sass';

interface CountType {
    count: number,
    styleSwitch: boolean
}

const random = () => {
    const deg = [-10, -5, 0, 5, 10];
    const randomNumber = Math.floor(Math.random() * 4);
    return deg[randomNumber];
};

const Count: FC<CountType> = ({ count, styleSwitch }) => {

    return (
        <div
            className="count"
            style={{
                fontSize: styleSwitch ? '60px' : '',
                transform: styleSwitch ? `rotate(${random()}deg)` : ''
            }}
        >
            {count}
        </div>
    );
};

export default Count;