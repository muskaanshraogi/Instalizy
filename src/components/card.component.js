import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField } from '@material-ui/core';
import Software from './../data/software.json';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 330,
    maxWidth: 350,
    marginLeft: '5%',
    display: 'inline-block',
    marginTop: '4%'
  },
  avatar: {
      marginLeft: "7%",
      backgroundColor: "#ffffff",
      width: "55px",
      height: "55px"
  },
  button: {
      width: '36%',
      marginLeft: '32%'
  },
  text: {
      marginTop: '5%',
      minHeight: 160
  },
  header: {
      height: "10%"
  }
}));

export default function AppCard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState(null);
    const [soft, setSoft] = React.useState(null); 
    const [status, setStatus] = React.useState(false);
    const apps = Software.softwares;

    const handleClick = (e) => {
        const name = e.currentTarget.id;
        setSoft(apps.find((app) => {
            return app.name === name

        }))

        setOpen(true)
    }

    const handleSubmit = (e) => {
        if(password) {
            setStatus(true)
            let install = window.remote.require('./backend/install')
            install(password, soft.script)

            setTimeout(() => {
                setOpen(false)
            },8000)
        } 
    }

    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    const handleClose = (e) => {
        setOpen(false)
    }

    return (
        <div>
            {apps.map((app,index) => (
                <Card className={classes.root}>
                    <CardHeader title={app.name} subheader={app.version} className={classes.header} avatar={
                        <Avatar aria-label="icon" className={classes.avatar} ><img alt={app.name} src={app.icon} height="45px"/></Avatar>
                    }/>
                    <Divider variant="inset" className={classes.divider}/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>{app.description}</Typography>
                    </CardContent>
                    <CardActions>
                        {app.installed === "false" ?
                            <Button variant="outlined" color="primary" className={classes.button} id={app.name} onClick={handleClick}>Install</Button> :
                            <Button variant="outlined" className={classes.button} disabled>Installed</Button>
                        }
                    </CardActions>
                </Card>
                ))};
                <Dialog open={open} aria-labelledby="form-dialog-title">
                {status === false ? 
                (
                    <DialogContent>
                        <DialogContentText>Enter your password :</DialogContentText>
                        <TextField autoFocus margin="dense" id="name" label="Password" type="password" fullWidth onChange={handleChange}/>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">Cancel</Button>
                            <Button onClick={handleSubmit} color="primary">Ok</Button>
                        </DialogActions>
                    </DialogContent>  
                ) : 
                (
                    <DialogContent>
                        <DialogContentText>Installing....</DialogContentText>
                    </DialogContent>
                )}
                </Dialog>
        </div>
    );
}
