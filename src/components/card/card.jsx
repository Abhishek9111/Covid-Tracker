import React from 'react'
import { Card,CardContent,Typography,Grid } from '@material-ui/core'
import styles from './card.module.css'
import cx from 'classnames'
import Countup from 'react-countup'


const card = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed) return <h1>Loading!!</h1>
    return (
        <div className={styles.container}>
            <Grid container spacing ={3} justifyContent='center' className={cx(styles.card,styles.infected)}>
                <Grid item component ={Card} xs={12} mid={3}>
                    <CardContent>
                        <Typography color='textSecondary'>Infected</Typography>
                        <Typography variant='h5'>
                          <Countup start={0} end={confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Active Cases </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing ={3} justifyContent='center' className={cx(styles.card,styles.recovered)}>
                <Grid item component ={Card} xs={12} mid={3}>
                    <CardContent>
                        <Typography color='textSecondary'>Recovered</Typography>
                        <Typography variant='h5'>
                        <Countup start={0} end={recovered.value} duration={2.5} separator=','/>
                            </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Recoveries </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing ={3} justifyContent='center' className={cx(styles.card,styles.deaths)}>
                <Grid item component ={Card} xs={12} mid={3}>
                    <CardContent>
                        <Typography color='textSecondary'>Deaths</Typography>
                        <Typography variant='h5'>
                        <Countup start={0} end={deaths.value} duration={2.5} separator=','/>
                            </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Deceased</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default card
