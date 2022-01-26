import * as FaIcons from 'react-icons/fa'

import React, { useState } from 'react';
import { SidebarColor, SidebarData } from './SidebarData';

import { Link } from 'react-router-dom'
import logoMarseille from "../assets/marseille-logo.png";
import styled from 'styled-components';

const TopNavbar = styled.div<{close: boolean}>`
    display: flex;
    align-items: center;
    height: 3.5rem;
    background-color: ${SidebarColor};
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #fff;
`

const SidebarMenu = styled.div<{close: boolean}>`
    height: 100vh;
    background-color: ${SidebarColor};
    top: 0;
    max-width: ${({ close}) => close ? '80px' : '250px'};
    min-width: ${({ close}) => close ? '80px' : '250px'};
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`;

const MenuItemIcon = styled.span`
    font-size: 1.2rem;
`;

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
`
const Title = styled.h1`
    color: #fff;
    font-size: 24px;
    margin: 16px 32px;
`;

const Logo = styled.img`
    width: 120px;
    position: absolute;
    right: 20px;
`;

const MainContainer = styled.div`
    display: flex;
`;

const PageContainer = styled.div`
    margin: 18px;
    height: 100vh;
    overflow-y: scroll;
`;

const Navbar = (props: any) => {
    const [close, setClose] = useState(true);
    const showSidebar = () => setClose(!close);
    return (
        <>
            <TopNavbar close={close}>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
                <Title>Canebière Info'</Title>
                <Logo src={logoMarseille} alt="ville de marseille"/>
            </TopNavbar>
            <MainContainer>
                <SidebarMenu close={close}>
                    {SidebarData.map((item, index) => {
                        return (
                            <MenuItems key={index}>
                                <MenuItemLinks to={item.path}>
                                    <MenuItemIcon>{item.icon}</MenuItemIcon>
                                    {!close && <span style={{marginLeft: '16px'}}>{item.title}</span>}
                                </MenuItemLinks>
                            </MenuItems>
                        )
                    })}
                </SidebarMenu>
                <PageContainer>
                    {props.children}
                </PageContainer>
            </MainContainer>
        </>
    )
}

export default Navbar;
