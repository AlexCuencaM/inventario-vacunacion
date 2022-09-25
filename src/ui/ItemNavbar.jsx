import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
const LinkRouted = styled(ListItem)({
    color: "inherit"
})
export const ItemNavbar = (props) => {
  const {label:primary, route:to} = props.opt
  return (
    <LinkRouted component={RouterLink} to={to} disablePadding>
        <ListItemButton>
            <ListItemText primary={primary} />
        </ListItemButton>
    </LinkRouted>
  )
}
ItemNavbar.propTypes = {
    opt: PropTypes.object.isRequired
};