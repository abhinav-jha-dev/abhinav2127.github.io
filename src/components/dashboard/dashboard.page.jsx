import React, { useState, useEffect } from 'react';
import { UnderlineNav } from '@primer/components';
import { Switch, Route, Link } from 'react-router-dom';
import OverviewPage from '../overview/overview.page';
import SkillPage from '../skills/skill-page';
import RepositoryPage from '../repository/repository.page';
import ExperiencePage from '../experience/experience.page';
import { Nav } from 'react-bootstrap';

function DashboardPage(props) {
    const [defaultKey, setDefaultKey] = useState(window.location.pathname);
    const getSelectedTab = function (eventKey) {
        setDefaultKey(eventKey);
    }
    const navigationTabs = function () {
        return (<UnderlineNav className="underline-nav-overflow">
            <Link to="/" onClick={() => getSelectedTab("/")} >
                <UnderlineNav.Link as="div" selected={defaultKey === "/"}>
                    Overview
                </UnderlineNav.Link>
            </Link>
            <Link to="/skills" onClick={() => getSelectedTab("/skills")}>
                <UnderlineNav.Link as="div" selected={defaultKey === "/skills"}>
                    Skills
                </UnderlineNav.Link>
            </Link>
            <Link to="/experience" onClick={() => getSelectedTab("/experience")}>
                <UnderlineNav.Link as="div" selected={defaultKey === "/experience"}>
                    Experiences
                </UnderlineNav.Link>
            </Link>
            <Link to="/repositories" onClick={() => getSelectedTab("/repositories")}>
                <UnderlineNav.Link as="div" selected={defaultKey === "/repositories"}>
                    Repositories
                </UnderlineNav.Link>
            </Link>
        </UnderlineNav>);
    }
    return (
        <>
            {navigationTabs()}
            <Switch>
                <Route path="/experience">
                    <ExperiencePage />
                </Route>
                <Route path="/repositories">
                    <RepositoryPage />
                </Route>
                <Route path="/skills">
                    <SkillPage />
                </Route>
                <Route exact path="/">
                    <OverviewPage />
                </Route>
            </Switch>
        </>
    );
}

export default DashboardPage;