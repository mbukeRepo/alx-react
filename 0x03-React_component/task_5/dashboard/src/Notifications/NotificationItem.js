import React from 'react';
import PropTypes from 'prop-types';

export default class NotificationItem extends React.PureComponent {
    render() {
      const {type, value, html, id, markAsRead} = this.props;
      return (
        <li data-priority={type} onClick={() => markAsRead(id)}>
            {value ? value: <div dangerouslySetInnerHTML={{__html:html }}></div>}
        </li>
      ); 
    }
}
NotificationItem.defaultProps = {
    type:'default',
    value:'',
    html: "",
    markAsRead: () => {},
    id: NaN
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
}
