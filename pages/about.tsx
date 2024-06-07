import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import Timeline from '../components/Timeline';


const AboutPage = () => {
    const timelineData = [
        {
            title: 'Event 1',
            content: 'Description for event 1.',
            image: 'https://via.placeholder.com/300'
        },
        {
            title: 'Event 2',
            content: 'Description for event 2.'
        },
        {
            title: 'Event 3',
            content: 'Description for event 3.',
            image: 'https://via.placeholder.com/300'
        },
        {
            title: 'Event 4',
            content: 'Description for event 4.',
            image: 'https://via.placeholder.com/300'
        },
        {
            title: 'Event 5',
            content: 'Description for event 3.',
            image: 'https://via.placeholder.com/300'
        }
    ];

    return (
        <Layout>
            <PageIntro pageIntroBackgroundImage="url('/images/slide-2.jpg')" titleText='About'
                subtitleText='Learn about the Purdue Climate Action Collective and their mission to direct Purdue University to Carbon Neutrality' />

            <section>

                <div className="about-content">
                    <h4>What is the PCAC?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>Mission and Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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