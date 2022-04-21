import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
    return (
        <Box flex={2} p={2} sx={{
            display: { xs: "none", sm: "block" }
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography sx={{
                    fontSize: "25px"
                }}>Online Pets Owner</Typography>
                <AvatarGroup sx={{
                    marginTop: "10px"
                }} total={24}>
                    <Avatar alt="Liza" src="https://mui.com//static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com//static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px"
            }}>
                <Typography sx={{
                    fontSize: "25px",
                    marginBottom: "10px"
                }}>Latest Photos</Typography>

<ImageList sx={{ width: 300, height: 200 }} cols={3} rowHeight={164}>
    <ImageListItem >
      <img alt='h' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Le%C3%AFko_au_bois_de_la_Cambre.jpg/220px-Le%C3%AFko_au_bois_de_la_Cambre.jpg"
      />
    </ImageListItem>
    <ImageListItem >
      <img alt='h'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiY_saWSH69kEann0GYdm9RfeJEJQyy_PuoA&usqp=CAU"
      />
    </ImageListItem>
    <ImageListItem >
      <img alt='h'
        src="https://images.theconversation.com/files/224977/original/file-20180626-112611-1uf34g4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
      />
    </ImageListItem>
</ImageList>  
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px"
            }}>
                <Typography sx={{
                    fontSize: "25px"
                }}>Latest Conversations</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>

        </Box>
    )
}

export default RightBar