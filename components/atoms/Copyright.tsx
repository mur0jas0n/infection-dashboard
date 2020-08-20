import React from 'react'
import Typography from '@material-ui/core/Typography'

const Copyright = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © CYNDISM, Inc. '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export default Copyright
