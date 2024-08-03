import React from 'react';

const ThreeBlocks: React.FC = () => {
    return (
        <div className='tb-container'>
            <div className='tb-block'>
                <img src="/images/logos/aau.png" alt="Logo 1" className='tb-logo' />
                <div className='tb-content'>
                    <div className='tb-text'>Of the 71 members of the American Association of Universities (the top research institutions in North America), Purdue is one of two without a university-backed goal for reducing carbon emissions.</div>
                    <a href='https://docs.google.com/spreadsheets/d/1N2cB_V5gemRSwaHTs1MWqW7ccnF_GDGG/edit?gid=1154344191#gid=1154344191' target="_blank" rel="noreferrer nofollow"><button className='tb-button'>Climate Action Plans</button></a>
                </div>
            </div>
            <div className='tb-block-col'>
                <img src="/images/logos/IU_logo.png" alt="Logo 2" className='tb-logo-safe' />
                <div className='tb-text'>In 2023, Indiana University approved their plan to reach carbon neutrality by 2040</div>
                <a href='https://cpf.iu.edu/climate-action/doc/Indiana%20Univ%20Climate%20Action%20Plan%202023.pdf' target="_blank" rel="noreferrer nofollow"><button className='tb-button'>IU Climate Action Plan</button></a>
            </div>
            <div className='tb-block'>
                <img src="/images/logos/aashe.jpg" alt="Logo 3" className='tb-logo' />
                <div className='tb-content'>
                    <div className='tb-text'>Purdue's report to the Association for the Advancement of Sustainability in Higher Education shows we have a lot of work to do to reduce our carbon emissions</div>
                    <a href='https://reports.aashe.org/institutions/purdue-university-in/report/2023-03-23/' target="_blank" rel="noreferrer nofollow"><button className='tb-button'>AASHE Report</button></a>
                </div>
            </div>
        </div>
    );
};

export default ThreeBlocks;
