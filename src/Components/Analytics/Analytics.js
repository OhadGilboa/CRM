import React, {useState} from 'react';
import { inject, observer } from 'mobx-react';

const Analytics = inject('clientsStore')(observer((props) => {
    
    return (
        <div></div>
    )
}))

export default Analytics