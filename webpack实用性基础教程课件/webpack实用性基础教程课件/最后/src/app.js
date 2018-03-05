
import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <div className="ot">
        <img src={require('./common/img/dogs.jpg')} alt=""/>
        <i className="fa fa-rocket"></i>
    </div>,
    document.getElementById('root')
);
