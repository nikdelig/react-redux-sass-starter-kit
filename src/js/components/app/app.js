import React from 'react';

const App = () => {
    console.log(this);
    console.log('foo');
    return (
        <div>
            <div className="skata foo">React simple starter</div>
        </div>
    );
};

export default App;
