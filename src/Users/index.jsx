import React from 'react';

import './index.css';

const TestComponent = () => {
    // Datasource:
    // const url = 'https://dummyjson.com/users';

    return <div id="users">
        <ol>
            <li>
                <strong>Fetch the user data</strong> from this public API: <br />
                <a href="https://dummyjson.com/users" target="_blank">https://dummyjson.com/users</a>
            </li>
            <li>
                <strong>Replicate the functionality and layout</strong> shown in the following reference: <br />
                <a href="https://example-web-app-8d97a.web.app" target="_blank">Example Solution</a>
                <ul>
                    <li>Display each user as a <strong>tile/card</strong></li>
                    <li>Each tile should include a <strong>checkbox</strong> labeled with the user's name and age (e.g., <code>John Doe (32)</code>)</li>
                    <li><strong>Clicking the text</strong> should toggle the checkbox</li>
                    <li>If the checkbox is checked, the tile should be <strong>visually highlighted</strong></li>
                    <li>Include a <strong>sort button</strong> in the top-left corner to sort users by <em>name</em> or <em>age</em></li>
                </ul>
            </li>
            <li>
                Focus on <strong>replicating the behavior and appearance</strong> of the reference as closely as possible.
            </li>
            <li>
                <strong>Bonus:</strong> The reference solution is mobile responsive. Matching this responsiveness will earn extra credit.
            </li>
        </ol>

    </div>
}

export default TestComponent;