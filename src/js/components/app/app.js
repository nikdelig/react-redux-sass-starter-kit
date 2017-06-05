import React from 'react';
import store from '../../reducers/index';

const App = () => {
    console.log(store);
    console.log('bar');
    return (
        <div>
            <div className="skata foo">React simple starter</div>
        </div>
    );
};

export default App;
