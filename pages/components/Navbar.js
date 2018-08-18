import Link from 'next/link';
export default class Navbar extends React.Component {
  componentDidMount() {
    $('.counter').countUp();
    $(function() {
      $('.filtr-container').filterizr();
    });
  
    $(function() {
      $('.filtr-item a').Chocolat();
    });
  };
render(){
  
return(
    <div className="Navbar">
    <div className="w3ls-banner-info-bottom">
    <div className="container">
      <div className="banner-address">
        <div className="col-md-3 banner-address-left">
          <p><i className="fa fa-map-marker" aria-hidden="true"></i> Gajanan Nagar, Wathoda, Nagpur.
                    </p>
        </div>
        <div className="col-md-3 banner-address-left">
          <p><i className="fa fa-envelope" aria-hidden="true"></i> <Link href="mailto:vvisheshta@rediffmail.com"><a href="mailto:vvisheshta@rediffmail.com">vvisheshta@rediffmail.com</a></Link></p>
        </div>
        <div className="col-md-3 banner-address-left">
          <p><i className="fa fa-phone" aria-hidden="true"></i> 09823382184</p>
        </div>
        <div className="col-md-3 banner-address-left">
          <p><i className="fa fa-phone" aria-hidden="true"></i> 09823487272</p>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  <style jsx>
  {
      `
      .aa{
        color:#000;
        font-family: 'Amita', cursive;
        
      }
      `
  }
  </style>
  <div className="header">
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="navbar-header navbar-left">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <h1 className='aa'><Link  href="/"><a>
            विशेषता</a></Link></h1>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <nav className="cl-effect-13" id="cl-effect-13">
            <ul className="nav navbar-nav">
              <li ><Link href="/"><a href="/">Home</a></Link></li>
              <li><Link href="/Services"><a href="Services">Services</a></Link></li>
              <li><Link href="/Portfolio"><a href="Portfolio">Portfolio</a></Link></li>

              <li><Link href="/Contact"><a href="Contact">Contact</a></Link></li>
            </ul>
            <div className="w3_agile_login">
              <div className="cd-main-header">
                <a className="cd-search-trigger" href="#cd-search"> <span></span></a>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  </div>
  </div>
);
}
}