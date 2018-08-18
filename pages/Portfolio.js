import Link from 'next/link';
import Layout from './components/Layout';

export default class Portfolio extends React.Component{
    render(){
        return( <Layout>
                <div className="Portfolio">
           
		<div className="container">
			<div className="agileits-title"> 
				<h2 className="w3ls_head"><span>Port</span>folio</h2>
			</div>
			<ul className="simplefilter w3layouts agileits">
				<li className="active w3layouts agileits" data-filter="all">All</li>
				<li className="w3layouts agileits" data-filter="1">Category1</li>
				<li className="w3layouts agileits" data-filter="2">Category2</li>
				<li className="w3layouts agileits" data-filter="3">Category3</li>
				<li className="w3layouts agileits" data-filter="4">Category4</li>
				<li className="w3layouts agileits" data-filter="5">Category5</li>
			</ul>

			<div className="filtr-container w3layouts agileits">

				<div className="filtr-item w3layouts agileits portfolio-t" data-category="1, 5" data-sort="Busy streets">
					<Link href=""><a href="/static/images/g1.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g1.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 5" data-sort="Luminous night">
					<Link href="/static/images/g2.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g2.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="1, 4" data-sort="City wonders">
					<Link href="/static/images/g3.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g3.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="3" data-sort="In production">
					<Link href="/static/images/g4.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g4.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="3, 4" data-sort="Industrial site">
					<Link href="/static/images/g5.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g5.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 4" data-sort="Peaceful lake">
					<Link href="/static/images/g6.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g6.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="1, 5" data-sort="City lights">
					<Link href="/static/images/g7.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g7.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 4" data-sort="Dreamhouse">
					<Link href="/static/images/g8.jpg"><a href="" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g8.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 4" data-sort="Dreamhouse">
					<Link href=""><a href="/static/images/g9.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g9.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>


				<div className="filtr-item w3layouts agileits portfolio-t" data-category="1, 5" data-sort="Busy streets">
					<Link href=""><a href="/static/images/g10.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g10.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 5" data-sort="Luminous night">
					<Link href=""><a href="/static/images/g11.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g11.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="1, 4" data-sort="City wonders">
					<Link href=""><a href="/static/images/g12.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g12.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="3" data-sort="In production">
					<Link href=""><a href="/static/images/g13.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g13.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="3, 4" data-sort="Industrial site">
					<Link href=""><a href="/static/images/g14.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g14.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 4" data-sort="Peaceful lake">
					<Link href=""><a href="/static/images/g15.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g15.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="1, 5" data-sort="City lights">
					<Link href=""><a href="/static/images/g16.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g16.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 4" data-sort="Dreamhouse">
					<Link href=""><a href="/static/images/g17.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g17.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="filtr-item w3layouts agileits" data-category="2, 4" data-sort="Dreamhouse">
					<Link href=""><a href="/static/images/g18.jpg" className="b-link-stripe w3layouts agileits b-animate-go thickbox">
						<figure>
							<img src="/static/images/g18.jpg" className="img-responsive w3layouts agileits" alt="W3layouts Agileits" />
							<figcaption>
								<h3>Vvisheshta</h3>
							</figcaption>
						</figure>
					</a></Link>
				</div>

				<div className="clearfix"></div>
			</div>
		</div>
       
	</div>
	</Layout>
	

        );
    }
}