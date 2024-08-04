import React, { useState, useMemo } from 'react';
import { IconButton, Badge, Popover, List, ListItem, ListItemText, Typography } from '@mui/material';
import { IoNotificationsCircle } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { maskNotificationAsRead } from '@/redux/notification/Action';

export const NotificationPopup = ({ notifications, notificationsUnread }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [readNotifications, setReadNotifications] = useState([]);
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const markNotificationAsRead = (id) => {
        dispatch(maskNotificationAsRead(id));
        setReadNotifications(prev => [...prev, id]);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'notification-popover' : undefined;

    return (
        <div onClick={handleClick} className="relative">
            <IconButton>
                <Badge color='secondary' badgeContent={notificationsUnread?.length}>
                    <IoNotificationsCircle style={{ fontSize: "1.5rem" }} />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <List sx={{ width: '300px', maxHeight: '400px', overflow: 'auto' }}>
                    {notifications.map((notification) => (
                        <ListItem
                            key={notification.id}
                            divider
                            sx={{
                                backgroundColor: notification.read || readNotifications.includes(notification.id) ? 'inherit' : '#e3f2fd',
                                cursor: 'pointer',
                            }}
                            onClick={() => markNotificationAsRead(notification.id)}
                        >
                            <ListItemText
                                primary={notification.content}
                                secondary={
                                    <Typography variant="caption" color="text.secondary">
                                        {new Date(notification.createdAt).toLocaleDateString()}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Popover>
            <span className='font-semibold text-base'>Thông báo</span>
        </div>
    );
};