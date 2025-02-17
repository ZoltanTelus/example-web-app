import React from 'react';

import './index.css';
import Solution from './Solution';

const TestComponent = ({ }) => {
    // Datasource:
    // https://dummyjson.com/users

    return <div id="testComponent">
        <a href="https://example-web-app-b6e1e.web.app" target="_blank">Solution</a><br /><br />
        Start coding here...
        <Solution />
    </div>
}

export default TestComponent;