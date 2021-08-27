import React, {FC} from "react";

interface CountType {
    count: number,
    styleSwitch: boolean
}

const Count: FC<CountType> = ({count, styleSwitch}) => {

    return (
        <div className={styleSwitch ? 'count' : ''}>
            {count}
        </div>
    );
};

export default Count;