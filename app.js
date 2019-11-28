class Message extends React.Component {
    constructor(props) {                 /* recently 'constructor' is not necessary however it's good to know how to use it */
        super(props);
        this.state = {
            messageIsActive: false
        };
        this.handleMessageButton = this.handleMessageButton.bind(this); /* binding 'this' to 'handleMessageButton' method */
    }

    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        });
    }

    render() {
        // console.log(this.state.messageIsActive); returns 'true' or 'false' (depending on the state of the button)
        const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus voluptas temporibus accusantium molestiae distinctio eum ipsum fugiat, hic repudiandae ipsa cum ipsam enim optio? Ut repellat ipsum optio exercitationem?";
    
        return (
            <React.Fragment>
                <h2 style={{textTransform:"uppercase", textAlign:"center"}}>Click the button to display the text</h2>
                {this.state.messageIsActive ? <p style={{border:"1px solid grey", borderRadius:"4px", margin:"0 auto", padding:"8px", width:"800px"}}>{text}</p> : null}
                <button onClick={this.handleMessageButton} style={{backgroundColor:"khaki", border:"1px solid black", borderRadius:"4px", boxShadow:"3px 3px 3px grey", fontSize:"20px", marginLeft:"45%", marginTop:"10px", padding:"10px"}}>
                    {this.state.messageIsActive ? 'Hide' : "Show"}
                </button>
                {/* one can also use: this.state.messageIsActive && <p>{text}</p> */}
            </React.Fragment>
        );
    }
}

ReactDOM.render(
  <Message />, 
  document.getElementById("root")
);


