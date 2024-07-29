import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import Timeline from '../components/Timeline';


const AboutPage = () => {
    const timelineData = [
        {
            title: 'Fall 2022',
            content: "PCAC begins as a group of faculty concerned about Purdue's commitments to fighting climate change on campus.",
        },
        {
            title: 'March 2023',
            content: 'Students join PCAC and, now united and bigger and louder, the PCAC holds a town hall to introduce ourselves to the Purdue community.',
            image: '/images/timeline/profstanding.png'
        },
        {
            title: 'March 2023',
            content: 'The University Senate, backed by members of the PCAC, endorses the resolutions already passed by the Purdue Student Government and the Purdue Graduate Student Government. These resolutions call on Purdue to join the Greater Lafayette Climate Action Plan and to commit to decarbonization goals.',
            image: '/images/timeline/universitysenate.png'
        },
        {
            title: 'February 2024',
            content: 'Members of the PCAC attend the Board of Trustees meeting, letting them know that we want them to take action.',
            image: '/images/timeline/students.png'
        },
    ];

    return (
        <Layout>
            <PageIntro pageIntroBackgroundImage="url('/images/aboutbg.png')" titleText='About'
                subtitleText='Learn about the Purdue Climate Action Collective and their mission to direct Purdue University to Carbon Neutrality' />

            <section>

                <div className="about-content">
                    <h4>What is the PCAC?</h4>
                    <p>The Purdue Climate Action Collective is a group of over 400 students, faculty and staff at Purdue University (West Lafayatte campus) who take climate change, and our responsibility to do everything we can to mitigate it, seriously. We want to see the campus where we live, work and study doing more to reduce its planet-warming emissions.</p>
                    <h4>Core Beliefs</h4>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}

                    <ul>
                        <li>Climate change is the most pressing issue of our day.</li>
                        <li>All institutions—large and small—have an obligation to decarbonize.</li>
                        <li>Justice demands that we who have benefited from years of burning fossil fuels lead the way to a greener, more sustainable future.</li>
                        <li><a href="https://www.nature.com/articles/d41586-023-03348-0" target="_blank" rel="noreferrer nofollow">Huising and Aron</a> are right that universities have a particular responsibility to move away from fossil fuels.</li>
                        <li>We must heed the <a href="https://www.ipcc.ch/report/sixth-assessment-report-cycle/" target="_blank" rel="noreferrer nofollow">United Nations&apos; IPCC</a> report that says we must decarbonize “this decade” in order to avoid the worst effects upon our environment.</li>
                        <li>These efforts must start now.</li>
                    </ul>

                    <p></p>
                    <p></p>
                </div>
            </section>

            <div className="contact-head">
                <h4>Timeline</h4>
            </div>

            <div className="app">
                <Timeline items={timelineData} />
            </div>

            <Footer />
        </Layout>
    )
}

export default AboutPage