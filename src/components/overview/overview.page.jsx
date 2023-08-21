import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { MetaDataApi, ExperienceApi } from '../../data/app-data';
import OverviewSkillsWidget from './overview_skills.widget';
import OverviewRepositoryWidget from './overview_repository.widget';
import { appModule } from '../../utilities/enums';
import OrganizationTimeline from '../organization/organization_timeline.widget';
import ExpRadarWidget from './exp_radar.widget';
import VideoCarouselWidget from './video_carousel.widget';

function OverviewPage(props) {
    const currentYear = new Date().getFullYear();
    const [width, setWidth] = React.useState(window.innerWidth);
    const latestOrgExperience = ExperienceApi.filterExperienceByYear(appModule.Organization, currentYear);
    let skillData = MetaDataApi.getOverviewSkillsDetails();
    let repositoryData = MetaDataApi.getOverviewRepositories();

    const skillsTemplate = function () {
        if (skillData.length > 0) {
            return (
                <>
                    <div className="ovr_title">Pinned skills</div>
                    <Row>
                        {skillData.map((v, idx) => {
                            if (width < 640 && v.id == 3) return null;
                            return (
                                <Col md={4} sm={4} xs={6} key={idx}>
                                    <Card>
                                        <div className="m-2">{
                                            // @ts-ignore
                                            v.name}</div>
                                        <OverviewSkillsWidget {...v} />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </>);
        }
        return null;
    };

    const repositoryTemplate = function () {
        if (repositoryData.length > 0) {
            return (
                <>
                    <div className="ovr_title">Pinned projects</div>
                    <Row>
                        {repositoryData.map((v, idx) => {
                            return (
                                <Col md={6} className="pt-1 pb-1" key={idx}>
                                    <OverviewRepositoryWidget {...v} />
                                </Col>
                            )
                        })}
                    </Row>
                </>);
        }
        return null;
    };

    const experienceTemplate = function () {
        let props = {
            timeline: latestOrgExperience,
            showYearFilter: true,
            year: currentYear
        };
        return (
            <>
                <div className="ovr_title">Pinned Experience</div>
                <OrganizationTimeline {...props} ></OrganizationTimeline>
            </>
        );
    }

    return (
        <>
            <Container className="no-padding">
                <Row>
                    <Col md={7} className="mar-top-md">
                        <VideoCarouselWidget showUpcoming={false} />
                        <p>
                            {/* <h5>Hi there 👋 Ask me anything!</h5>
                            A Software Developer from India who loves to work with complex Solutions and looking forward to build carrier in AI and Machine Learning. I believe in not wasting my time so when I am not busy with code, I create recipes and cook delicious food.
<br />
                            <br />
                            To know more about me, connect with me on the following channels:
                            <br /> */}
                            <a href="https://discord.gg/Tzas8sd" target="_blank"><img src="https://img.shields.io/badge/-HireMe-7289d9?style=flat&logo=Discord&logoColor=white&link=https://discord.gg/Tzas8sd" /></a>
                            &nbsp;
                            <a href="https://www.linkedin.com/in/abhinavjha58/" target="_blank"><img src="https://img.shields.io/badge/-abhinavjha58-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/abhinavjha58/" /></a>
                            &nbsp;
                            <a href="https://medium.com/@abhinav.jha58" target="_blank"><img src="https://img.shields.io/badge/-@__abhinav.jha58-000000?style=flat&labelColor=000000&logo=Medium&link=https://medium.com/@abhinav.jha58" /></a>
                            &nbsp;
                            <a href="https://twitter.com/abhinavjha2127" target="_blank"><img src="https://img.shields.io/badge/-@__abhinavjha2127-1ca0f1?style=flat&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/abhinavjha2127" /></a>
                            &nbsp;
                            <a href="https://www.instagram.com/lazy_abhi_/" target="_blank"><img src="https://img.shields.io/badge/-@abhinavjha-purple?style=flat&logo=instagram&logoColor=white&link=https://www.instagram.com/lazy_abhi_/" /></a>
                            &nbsp;
                            <a href="mailto:abhinav.jha58@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-abhinavjha58-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:abhinav.jha58@gmail.com" /></a>
                        </p>
                    </Col>
                    <Col md={5}>
                        <ExpRadarWidget />
                    </Col>
                </Row>
                {skillsTemplate()}
                {repositoryTemplate()}
                {experienceTemplate()}
            </Container>
        </>
    );
}

export default OverviewPage;