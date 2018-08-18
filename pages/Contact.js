import Link from 'next/link';
import Layout from './components/Layout';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render(){
        return(<Layout>
<div className="Contact">

<div className="contact agileits">
<div className="container"> 
<div className="agileits-title">
				<h2 className="w3ls_head"><span>Contact </span>Us</h2>
			</div> 


            <div className="contact-agileinfo">
            <div className="col-md-7 contact-form wthree">
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input required="" placeholder="Name" name="Name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input required="" placeholder="Name" name="Name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <textarea placeholder="Message" name="Message" required=""></textarea>        </label>
        <input type="submit" value="Submit" />
      </form>
     
				</div>
                <div className="col-md-4 contact-right wthree">
					<div className="contact-text w3-agileits">
						<h4>GET IN TOUCH :</h4>
						<p><i className="fa fa-map-marker"></i> Gajanan Nagar,Wathoda layout,<br/>B/h Plazza Bar,Nagpur 99,<br/>Wing No. 3 Rajat Sankul,<br/>Nagpur-10. </p>
						<p><i className="fa fa-phone"></i> Telephone : 09823382184</p>
						<p><i className="fa fa-phone"></i> Telephone : 09823487272</p>
						<p><i className="fa fa-envelope-o"></i> Email : <a href="mailto: vvisheshta@rediffmail.com"> vvisheshta@rediffmail.com</a></p> 
					</div> 
				</div> 
				<div className="clearfix"> </div>	
            </div>
</div>
</div>
<div className="map w3layouts">  
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.58514549601483!2d79.09475234213525!3d21.137974275423097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d36eb5bebed3580!2sRajat+Sankul+Appartment!5e0!3m2!1sen!2sin!4v1531433286921" width="600" height="450" frameborder="0" allowfullscreen></iframe>
	</div>
    
  </div>

	</Layout>

        );
    }
}