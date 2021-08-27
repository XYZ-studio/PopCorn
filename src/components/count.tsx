import React, {FC} from "react";
import './sass/count.sass';

interface CountType {
    count: number,
    styleSwitch: boolean
}

const Count: FC<CountType> = ({count, styleSwitch}) => {

    return (
        <div className="count" style={{fontSize: styleSwitch ? '60px' : ''}}>
            {count}
        </div>
    );
};

export default Count;