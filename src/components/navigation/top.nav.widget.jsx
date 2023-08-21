import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from '@primer/components';
import { MetaDataApi } from '../../data/app-data';
import SideNavWidget from './side.nav.widget';

function TopNavWidget() {
    let personData = MetaDataApi.getPersonData();
    return (
        <Navbar variant="dark" className={"nav-color"}>
            <div className={"d-md-none d-sm-block"}>
                <SideNavWidget />
            </div>
            <Navbar.Brand className="text-center w-100">
                <Link href="/">
                    <img
                        src={require('../../assets/images/profile-logo-light.png').default}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt={personData.name + " | " + personData.role}
                    />
                </Link>
            </Navbar.Brand>
        </Navbar>
    );
}

export default TopNavWidget;