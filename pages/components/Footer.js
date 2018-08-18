import Link from 'next/link';


export default class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
            <div className="footer">
		<div className="container">
			<div className="agile-footer-grids">
				<div className="col-md-4 agile-footer-grid">
					<h4>History</h4>
					<p>Establishment Year :  April 2003 <br />

						Nature of Work :	Event  Management Solution<br />
						
						Working Area: 		All Over India<br />
						
						Company  Turn Over:  9 Digit  figure.<br />
						
						Working strength:  700 Events On Various Themes 
														   in  last  10 years
						
							</p>
				</div>
				
				<div className="col-md-2 agile-footer-grid">
					<h4>EVENT COVERED AT</h4>
					<ul>
						<li>Maharashtra</li>
						<li>AndhraPradesh</li>
						<li>MadhyaPradesh</li>
						<li>Chhattisgarh</li>
						<li>Rajasthan</li>
						<li>Goa</li>
						
						
					</ul>
				</div>
				<div className="col-md-2 agile-footer-grid">
						<h4>EVENT COVERED AT</h4>
						<ul>
							
							<li>Jharkhand</li>
							<li>Gujarat</li>
							<li>Delhi</li>
							<li>Telangana</li>
							<li>Bihar</li>
						
						<li>Kerla</li>
							
						</ul>
					</div>
				<div className="col-md-2 agile-footer-grid">
					<h4>Vvisheshta A Concept</h4>
					<ul>
						<li className="text"><a href="/">Home</a></li>
						<li className="text"><a href="/Services">Services</a></li>
						
						<li className="text"><a href="/Portfolio">Portfolio</a></li>
						<li className="text"><a href="/Contact">Contact</a></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>

	<div className="modal fade" id="myModal"  role="dialog">
	
		<div className="modal-dialog">
			
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4>Vvisheshta</h4>
							<img src="/static/images/g11.jpg" alt=" " className="img-responsive"/>
							<h5>We know what you love</h5>
							<p>Providing guests unique and enchanting views from their events with its exceptional amenities, makes Star Hotel one of bests in its kind.Try our Event menu, awesome services and friendly staff while you are here.</p>
					</div>
				</div>
		</div>
	</div>

	<div className="agileits-w3layouts-copyright">
			<div className="container">
				<p>© 2018 Vvisheshta. All rights reserved.</p>
			</div>
		</div></div>
        )
    }
}