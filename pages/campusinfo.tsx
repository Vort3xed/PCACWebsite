import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
// import Timeline from '../components/Timeline';


const AboutPage = () => {
    return (
        <Layout>
            <PageIntro pageIntroBackgroundImage="url('/images/campusinfobg.png')" titleText='Get Involved'
                subtitleText='Discover meaningful ways to engage with the Purdue community and contribute to our sustainability initiatives.' />

                <section>
                    <div className='getinvolved-items'>
                        <div className='getinvolved-item'> 
                            <h4>Sign the petition</h4>
                            <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                            
                        </div>
                        <div className='getinvolved-item'> 
                            <h4>Sign the petition</h4>
                            <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                            <button>
                                
                            </button>
                        </div>
                    </div>
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