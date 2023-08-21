import React, { useState } from 'react';
import OrganizationTimeline from '../organization/organization_timeline.widget';
import { SelectMenu, Button } from '@primer/components';
import { experienceCategory } from '../../utilities/enums';
import EducationTimeline from './education_timeline.widget';

function ExperiencePage() {
    const [expCategory, setExpCategory] = useState(experienceCategory.Professional);

    const getSelectedCategoryWidget = function () {
        switch (expCategory) {
            case experienceCategory.Professional:
                return <OrganizationTimeline />;
            case experienceCategory.Educational:
                return <EducationTimeline />;
            default:
                break;
        }
    }

    return (
        <>
            <SelectMenu className="mar-top-md">
                <Button as="summary">Filters</Button>
                <SelectMenu.Modal>
                    {/* <SelectMenu.Header>Filter by Category</SelectMenu.Header> */}
                    {/* <SelectMenu.Filter placeholder="Filter projects" value="" aria-label="Filter Projects" /> */}
                    <SelectMenu.List>
                        <SelectMenu.Divider>Categories</SelectMenu.Divider>
                        <SelectMenu.Item href="#" onClick={() => setExpCategory(experienceCategory.Professional)} selected={expCategory == experienceCategory.Professional}>Professional Exp</SelectMenu.Item>
                        <SelectMenu.Item href="#" onClick={() => setExpCategory(experienceCategory.Educational)} selected={expCategory == experienceCategory.Educational}>Education</SelectMenu.Item>
                    </SelectMenu.List>
                </SelectMenu.Modal>
            </SelectMenu>
            {getSelectedCategoryWidget()}
        </>
    );
}

export default ExperiencePage;