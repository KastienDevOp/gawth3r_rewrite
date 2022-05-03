import React from 'react'
import { NavbarContainer, LeftNavbarContainer, RightNavbarContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink } from "../styles/Navbar.stlye"
import { Link } from "react-router-dom"
import Home from '../pages/Home'


function Navbar() {
  return (
    <NavbarContainer>
        <NavbarInnerContainer>
        <LeftNavbarContainer>'
            <NavbarLinkContainer>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
            </NavbarLinkContainer>
        </LeftNavbarContainer>
        <RightNavbarContainer></RightNavbarContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  )
}

export default Navbar