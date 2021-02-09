import React from 'react'
import Watch from '../../assets/images/watch.png'
import classes  from './uniLogo.module.css'

const watchLogo =(props) =>(
    <div className={classes.Logo}>
    <img src={Watch} alt='WatchLogo'/>
    </div>
)

export default watchLogo;