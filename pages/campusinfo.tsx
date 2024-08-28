import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import ThreeBlocks from '../components/threeblocks/ThreeBlocks';
import ScrollingText from '../components/scrollingtext/ScrollingText';
// import Timeline from '../components/Timeline';


const CampusInfo = () => {
    return (
        <Layout>
            <PageIntro pageIntroBackgroundImage="url('/images/campusinfobg.png')" titleText='Get Involved'
                subtitleText='Discover meaningful ways to engage with the Purdue community and contribute to our sustainability initiatives.' />


            <h4 className='banner-h4'>Where We Stand!</h4>
            < ThreeBlocks />
            <h4 className='banner-h4'>Purdue's Pollution:</h4>
            <p>&nbsp;</p>
            <ScrollingText />
            {/* <section>
                <h4 className='banner-h4'>Metrics</h4>
                <div className='getinvolved-items'>
                    <div className='getinvolved-item'>
                        <h4>Q:</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <br />
                        <h4>A:</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Q:</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <br />
                        <h4>A:</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                    </div>
                    <div className='getinvolved-item'>
                        <h4>Q:</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                        <br />
                        <h4>A:</h4>
                        <p>aiosjfpoase fioasjefoi ajsoie fjpa</p>
                    </div>
                    
                </div>
            </section> */}
            
            <Footer />
        </Layout>
    )
}

export default CampusInfo