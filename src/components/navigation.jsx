import LOGO from "../../src/cctv/vvrlogo.jpg";
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container header-section'>
        <div className='navbar-header '>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <div className="row d-flex" >
              <img style={{float: "left" , height: "55px"}} src={LOGO} alt="logo" />

              <a className='navbar-brand page-scroll text-orange' href='#page-top'>
                <span className="text-blue1">VVR HomeCare</span><br />
                <p className="contact-details text-orange1"> <i className='fa fa-phone call-icon text-orange1'></i>+91 9488343729</p>
              </a>
              
          </div>
        </div>

        <div
          className='collapse navbar-collapse nav-bar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
                Products
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
