import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../components/organisms/JasonChart'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

const Dashboard = () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </div>
  )
}

export default Dashboard
