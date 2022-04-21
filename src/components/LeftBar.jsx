import { Add, Groups, PermIdentity, Pets, RssFeed, Settings } from '@mui/icons-material'
import { Box, Button, FormControl, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, OutlinedInput, Typography } from '@mui/material'
import React from 'react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LeftBar = () => {

    const data = [
        { "name": "Feed", "icon": <RssFeed /> },
        { "name": "Groups", "icon": <Groups /> },
        { "name": "Pets", "icon": <Pets /> },
        { "name": "Settings", "icon": <Settings /> },
        { "name": "Profile", "icon": <PermIdentity /> },
    ];


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box flex={1} sx={{
            display: { xs: "none", sm: "block" },
        }}>
            <List>
                {data.map(da => (
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                {da.icon}
                            </ListItemIcon>
                            <ListItemText primary={da.name}>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box sx={{
                position: "fixed",
                bottom: "-30px"
            }}>
                <Button sx={{
                    color: "black",
                    position: "absolute",
                    bottom: "50px",
                    left: "50px",
                }} onClick={handleOpen}>Petweet <Add /></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                            marginBottom: "20px"
                        }}>
                            Add a Post
                        </Typography>
                        <FormControl sx={{ width: '25ch', marginBottom: "12px" }}>
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        </FormControl>
                        <FormControl sx={{ width: '25ch', marginBottom: "8px" }}>
                            <OutlinedInput placeholder="Please enter description" />
                        </FormControl>
                        <Button variant="contained" component="span">
                            Upload Post
                        </Button>
                    </Box>
                </Modal>
            </Box>

        </Box>
    )
}

export default LeftBar