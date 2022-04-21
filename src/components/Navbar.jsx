import { AddBox } from '@mui/icons-material';
import { AppBar, Avatar, Input, Toolbar, Typography, MenuItem, Button, Fade, Modal, Box } from '@mui/material'
import Menu from '@mui/material/Menu';
import React, { useState } from 'react'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    return (
        <>
        <AppBar sx={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: { xs: "fixed", sm: "sticky" },
            top: 'auto',
            bottom: 0,
        }} position='fixed'>
            <Toolbar>
                <Typography sx={{
                    display: { xs: "block", sm: "block" },
                    fontWeight: "900",
                    fontSize: { xs: "14px", sm: "20px" },
                    letterSpacing: "2px",
                }}>
                    PETSGRAM
                </Typography>
            </Toolbar>
            <Toolbar>
                <Input placeholder='Search a pet...' sx={{
                    display: {xs: "none" , sm:"block"},
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "10px",
                    padding: "3px",
                    width: { xs: "130px", sm: "350px" },
                    fontSize: { xs: "13px", sm: "14px" },
                }}></Input>

<Button sx={{
                display: {xs: "block" , sm: "none"},
            }} onClick={handleOpen}><AddBox sx={{
                fontSize: "40px",
                color: "white"
            }}/></Button>
            </Toolbar>
            <Toolbar>

                <Button
                    id="fade-button"
                    aria-controls={openMenu ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Avatar alt="Travis Howard" src="https://vetwork.co/galaxy/wp-content/uploads/siberian-husky-1.jpg" sx={{
                        marginRight: "-50px",
                        width: { xs: "35px" },
                        height: { xs: "35px" }
                    }} />
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloses}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleCloses}>Feed</MenuItem>
                    <MenuItem onClick={handleCloses}>Groups</MenuItem>
                    <MenuItem onClick={handleCloses}>Pets</MenuItem>
                    <MenuItem onClick={handleCloses}>Settings</MenuItem>
                    <MenuItem onClick={handleCloses}>Profile</MenuItem>
                    <MenuItem onClick={handleCloses}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>



<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </>
    )
}

export default Navbar