import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import Timeline from 'components/Timeline';

const AboutPage = () => {
    const mediaData = [
        {
            title: 'Purdue Exponent covers our 2023 town hall:',
            titleUrl: 'https://www.purdueexponent.org/campus/article_72ac8dc6-bd6c-11ed-ba62-d3439447c44e.html',
            image: 'images/inthemedia/big10.jpg'
        },
        {
            title: 'Indiana Public Media discusses our efforts:',
            titleUrl: 'https://indianapublicmedia.org/news/purdue-university-still-without-carbon-neutral-plan.php',
            image: 'images/inthemedia/ipm_discusses_our_efforts.jpg'
        },
        {
            title: 'Watching Washington interviews the founder of PCAC:',
            titleUrl: 'https://youtu.be/FiZXDFlh_6s?si=gE8M6z6q2AMPKZ7Z&amp;t=814',
            image: 'images/inthemedia/founder_interview.png'
        },
        {
            title: 'Purdue Exponent covers our Earth Day 2024 event:',
            titleUrl: 'https://www.purdueexponent.org/campus/article_b46db10c-0110-11ef-9717-47abefa6db73.html',
            image: 'images/inthemedia/photo_of_founder.png'
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
                        <h4>Sign the petition!</h4>
                        <p>Sign here: </p>
                        <a href= "https://tinyurl.com/PCACpetition" target="_blank" rel="noreferrer nofollow"><button>Petition</button></a>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Donate</h4>
                        <p>Donate to our gofundme.</p>
                        <a href="https://gofund.me/40efadc6" target="_blank" rel="noreferrer nofollow"><button>gofundme</button></a>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Contact Admin</h4>
                        <p>Contact the admin through our script and email list:</p>
                        <a href="https://docs.google.com/document/d/1WZFIyus67LcCuT4NDRScypTBUiPshU-q/edit" target="_blank" rel="noreferrer nofollow"><button>Learn More</button></a>
                    </div>
                </div>
            </section>

            <section>
                <h4 className='banner-h4'>Upcoming Events</h4>

                {/* REMOVE THIS LINE WHEN EVENTS ARE ADDED. */}
                <p className='banner-p'>Coming soon!</p>

                {/* <div className='event-block'>
                    <div className='event-block-text'>
                        <h3>Earth Day Town Hall</h3>
                        <p>April 22, 2021</p>
                        <p>Join us for a virtual town hall to discuss the future of sustainability at Purdue.</p>
                    </div>
                    <div className='event-block-image'>
                        <img src='https://via.placeholder.com/300' alt='placeholder' />
                    </div>
                </div> */}

            </section>

            <section>
                <h4 className='banner-h4'>In the Media</h4>
                <Timeline items={mediaData} />
            </section>

            <section>
                <h4 className='banner-h4'>Other Green Purdue Organizations</h4>

                {/* REMOVE THIS LINE WHEN ORGANIZATIONS ARE ADDED. */}
                <p className='banner-p'>Coming Soon!</p>

                {/* <div className='org-block'>
                    <div className='org-block-image'>
                        <img src='https://via.placeholder.com/300' alt='placeholder' />
                    </div>
                    <div className='org-block-text'>
                        <h3>Purdue Sustainability Council</h3>
                        <p>A student organization at Purdue University whose mission is to promote sustainability on Purdue's campus and in the surrounding community. </p>
                        <button>Visit Site</button>
                    </div>
                </div> */}
                
            </section>

            <Footer />
        </Layout>
    )
}

export default AboutPage