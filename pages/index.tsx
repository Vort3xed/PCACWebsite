import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro pageIntroBackgroundImage="url('/images/homebg.png')" titleText='Welcome to the Purdue Climate Action Collective' 
      subtitleText='This is a hub for climate action information at Purdue, as well as resources to be involved with sustainability efforts on campus.'
      rightVar={true} button={true}/>

      {/* <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>New arrivals are now in!</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Basic t-shirts $29,99</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Sale this summer</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section> */}

      

      {/* <ProductsFeatured />
      <Subscribe /> */}
      <Footer />
    </Layout>
  )
}


export default IndexPage