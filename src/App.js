import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavWidget from './components/navigation/top.nav.widget';
import { Switch, Route } from 'react-router-dom';
import OrganizationProfilePage from './components/organization/organization_profile.page';
import DashboardPage from './components/dashboard/dashboard.page';
import ProfilePage from './components/profile/profile.page';
import HireMePage from './components/hire_me/hire_me.page';
import NonProfitProfilePage from './components/organization/non_profit_profile.page';
import PWAAlert from './components/common/alerts/pwa.alert';

const App = () => {
  return (
    <>
      <TopNavWidget />
      <PWAAlert />
      <Container fluid={'xl'} className={"mar-top-md"}>
        <Row>
          <Col xs={12} sm={12} md={3}>
            <ProfilePage />
          </Col>
          <Col>
            <Switch>
              <Route path="/organizations/:name">
                <OrganizationProfilePage />
              </Route>
              <Route path="/non_profit/:name">
                <NonProfitProfilePage />
              </Route>
              <Route path="/hire-me">
                <HireMePage />
              </Route>
              <Route path="/">
                <DashboardPage />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
