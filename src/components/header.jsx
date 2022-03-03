import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import parse from 'html-react-parser';
import { Carousel } from 'react-responsive-carousel';
export const Header = (props) => {
  const Brands = props.data &&  props.data.title4;
  return (
    <Carousel>
    <div>
    <header id='header'>
      <div className='intro intros'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2 className="  stokesRed text-white pull-left">
                  {props.data ? props.data.title : 'Loading'}
                </h2>
                <h1 className=" stokesWhite text-rubyred">
                   {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h2 className="stokesRed text-white pull-right">
                {props.data ? props.data.title2 : 'Loading'}
                </h2>
                <div className="pt-3">
                <p className="p">{props.data ? props.data.paragraph : 'Loading'}</p>
                </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-bg-color btn-lg page-scroll'
                >
                  <div>
                    <span className="contact-details text-white">
                      <i className='fa fa-phone text-orange1'></i> +91 94883 43729
                    </span>
                  </div>

                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
    <div>
    <header id='header'>
      <div className='intro1 intros'>
        <div className='overlay'>
          <div className='container'>
          <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2 className="text-white pull-left">
                {Brands ? parse(Brands) : 'Loading'}
                </h2>
                {/* <h1 className="text-white">
                   {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h2 className="text-white pull-right">
                {props.data ? props.data.title2 : 'Loading'}
                </h2> */}
                <a
                  href='#features'
                  className='btn btn-custom btn-bg-color btn-lg page-scroll'
                >
                  <div>
                    <span className="contact-details text-white">
                      <i className='fa fa-phone text-orange1'></i> +91 94883 43729
                    </span>
                  </div>

                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
    <div>
    <header id='header'>
      <div className='intro2 intros'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2 className="text-white pull-left hov">
                  {props.data ? props.data.title : 'Loading'}
                </h2>
                <h1 className="text-rubyred hov">
                   {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h2 className="text-white pull-right ">
                {props.data ? props.data.title2 : 'Loading'}
                </h2>
                <div className="pt-3">
                {/* <p className="p">{props.data ? props.data.paragraph : 'Loading'}</p> */}
                </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg btn-bg-color page-scroll'
                >
                  <div>
                    <span className="contact-details text-white">
                      <i className='fa fa-phone text-orange1'></i> +91 94883 43729
                    </span>
                  </div>
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
    {/* <header id='header'>
      <div className='intro3 intros'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2 className="text-white pull-left hov">
                  {props.data ? props.data.title : 'Loading'}
                </h2>
                <h1 className="text-rubyred hov">
                   {props.data ? props.data.title1 : 'Loading'}
                </h1>
                <h2 className="text-white pull-right hov">
                {props.data ? props.data.title2 : 'Loading'}
                </h2>
                <div className="pt-3"> */}
                {/* <p className="p">{props.data ? props.data.paragraph : 'Loading'}</p> */}
                {/* </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}
</Carousel>
    
  )
}
