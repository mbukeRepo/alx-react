import React from 'react';

export default function NotificationItem({type, value, html}){
    return (
        <li data-priority={type}>
            {value ? value: <div dangerouslySetInnerHTML={{__html:html }}></div>}
        </li>
    );
}