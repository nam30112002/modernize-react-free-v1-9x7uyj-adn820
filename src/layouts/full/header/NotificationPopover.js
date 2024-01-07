import React, {useState} from 'react';
import {Badge, Divider, IconButton, Popover, Tooltip, Typography} from "@mui/material";
import {IconBellRinging} from "@tabler/icons";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Cookies from "js-cookie";

export default function NotificationPopover() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState([{"content":"1"},{"content":"2"}]);

    const handleOpen = async (event) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(`http://localhost:8080/get-all-unread-notification/${Cookies.get("username")}`, requestOptions)
        const data = await response.json();
        setNotifications(data);
        setOpen(!open);
        setAnchorEl(event.target);
    }

    const handleClose = () => {
        setOpen(!open);
        setAnchorEl(null)
    }
    const handleMarkAllAsRead = async () => {
        const requestOptions = {
            method: 'PUT',
            redirect: 'follow'
        };
        await fetch("http://localhost:8080/mark-all-read-notification/1", requestOptions)
        setNotifications([]);
    }

    return (
        <>
            <IconButton
                size="large"
                color="inherit"
                aria-controls="msgs-menu"
                aria-haspopup="true"
                onClick={handleOpen}
            >
                <Badge variant="dot" color="primary">
                    <IconBellRinging size="21" stroke="1.5"/>
                </Badge>
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleClose}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1">Notifications</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            You have {notifications.length} unread notifications
                        </Typography>
                    </Box>
                    {notifications && (
                        <Tooltip title=" Mark all as read">
                            <Button color="primary" onClick={handleMarkAllAsRead}>
                                Mark all as read
                            </Button>
                        </Tooltip>
                    )}
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />
                    <List disablePadding>
                        {notifications && notifications.map((element) => (
                            <ListItem>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {element.content}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box sx={{ p: 1 }}>
                    <Button fullWidth disableRipple>
                        View All
                    </Button>
                </Box>
            </Popover>
        </>
    )
}