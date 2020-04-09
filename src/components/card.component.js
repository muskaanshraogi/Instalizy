import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Divider,
    Button } from '@material-ui/core';
import Software from './../data/software.json';
import install from './../backend/install';

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

    const apps = Software.softwares;

    const handleClick = () => {
        install();
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
        </div>
    );
}