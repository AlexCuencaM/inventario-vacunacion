import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, CardHeader, IconButton } from '@mui/material'
import { useTheme } from '@emotion/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tooltip from '@mui/material/Tooltip'
export const EmployedHeaderCard = (props) => {
  const { employed } = props
  const theme = useTheme();
  return (
    <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="employed-avatar">
                {employed.names[0]}
            </Avatar>}
        action={
            <Tooltip title="Dar alta">
                <IconButton aria-label="alta-button">
                <FavoriteBorderIcon/>
                </IconButton>
            </Tooltip>
            }
        title={employed.names}
        subheader={employed.lastnames}
    />
  )
}

EmployedHeaderCard.propTypes = {
    employed: PropTypes.object.isRequired,
};
