import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import ResponsiveCarousel from '../components/ResponsiveCarousel/ResponsiveCarousel';
import Timeline from 'components/Timeline';

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
            <PageIntro pageIntroBackgroundImage="url('/images/getinvolvedbg.png')" titleText='Get Involved'
                subtitleText='Discover meaningful ways to engage with the Purdue community and contribute to our sustainability initiatives.' />

            <section>
                <h4 className='banner-h4'>What Can I Do Today?</h4>
                <div className='getinvolved-items'>
                    <div className='getinvolved-item'>
                        <h4>Sign the petition</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <button>Sign</button>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Donate</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <button>gofundme</button>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Contact Alumni</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <button>Learn More</button>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Contact Admin</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>

            <section>
                <h4 className='banner-h4'>Upcoming Events</h4>

                <div className='event-block'>
                    <div className='event-block-text'>
                        <h3>Earth Day Town Hall</h3>
                        <p>April 22, 2021</p>
                        <p>Join us for a virtual town hall to discuss the future of sustainability at Purdue.</p>
                    </div>
                    <div className='event-block-image'>
                        <img src='https://via.placeholder.com/300' alt='placeholder' />
                    </div>
                </div>

            </section>

            <section>
                <h4 className='banner-h4'>Past Events</h4>
                <Timeline items={timelineData} />
            </section>

            <section>
                <h4 className='banner-h4'>Other Green Purdue Organizations</h4>
                
            </section>


            {/* <section>

                <div className="about-content">
                    <h4>What is the PCAC?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>Mission and Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p></p>
                    <p></p>
                </div>
            </section> */}

            {/* <div className="contact-head">
                <h4>Timeline</h4>
            </div> */}

            <Footer />
        </Layout>
    )
}

export default AboutPage