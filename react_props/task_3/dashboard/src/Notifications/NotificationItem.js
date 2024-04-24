import React, { Component, Fragment } from 'react';

class NotificationItem extends Component {
    render() {
        const { type, value, html } = this.props;

        return (
            <Fragment>
                <li
                    data-priority-type={type || 'default'}
                    dangerouslySetInnerHTML={html ? html : undefined}
                />
                {!html && (
                    <li
                        data-priority-type={type || 'default'}
                    >
                        {value}
                    </li>
                )}
            </Fragment>
        );
    }
}

export default NotificationItem;
