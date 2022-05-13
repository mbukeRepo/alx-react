import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({type, value, html}){
    return (
        <li data-priority={type}>
            {value ? value: <div dangerouslySetInnerHTML={{__html:html }}></div>}
        </li>
    );
}
NotificationItem.defaultProps = {
    type:'default',
    value:'',
    html: ""
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string
}