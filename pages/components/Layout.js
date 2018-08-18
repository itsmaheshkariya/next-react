import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


export default class Layout extends React.Component{
    
    render(props){
        return(
            <div className="Layout">
            <Head>
            <title>Vvisheshta- A Concept</title>

<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Negotiation Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<link href="../static/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="../static/css/style.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="../static/js/jquery-2.1.4.min.js"></script>
<script src="../static/js/main.js"></script>




 {/* <script  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
crossorigin="anonymous"></script> */}

   <script type="text/javascript" src="../static/js/jquery-2.1.4.min.js"></script> 
<script src="../static/js/main.js"></script>
<script src="../static/js/new.js"></script>
<link rel="stylesheet" href="../static/css/font-awesome.min.css" />

<link rel="stylesheet" href="../static/css/flexslider.css" type="text/css" media="screen" property="" />
<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Amita:700|Hind|Noto+Sans" rel="stylesheet"/>
            </Head>
           
            <Navbar />

            {this.props.children}


            <Footer />
            <script src="../static/js/jquery.waypoints.min.js"></script>
	<script src="../static/js/jquery.countup.js"></script>
	<script src="../static/js/bootstrap.js"></script>
    <script src="../static/js/jquery.filterizr.js"></script>
		<script src="../static/js/controls.js"></script>
		

		<script src="../static/js/jquery.chocolat.js"></script>
		
            </div>
        );
    }
}