import { AppBar, Toolbar, FormControlLabel, Switch, Grid } from '@mui/material'
import logo from '../../assets/logo.png'

const TslToolbar = (props: any) => {
  return (
    <AppBar color='default'>
      <Toolbar variant='dense'>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item display="flex">
            <img src={logo} alt="TESSELO" width="120"/>
          </Grid>
          
          <Grid item display="flex">
            <FormControlLabel control={<Switch color='success' data-testid='switchButton' edge='start' onChange={props.mapTypeSelected}/>} label="NDVI"/>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default TslToolbar
