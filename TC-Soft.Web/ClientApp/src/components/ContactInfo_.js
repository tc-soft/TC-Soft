import React from 'react';

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            name: '',
            email: '',
            message: '',
            buttonSendValue: 'Wyślij',
            buttonResetValue: 'Reset',
            apiAddress: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.inputNameRef = React.createRef();
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
    }

    handleSubmit = (event) => {
        if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            
            fetch(this.state.apiAddress, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                })
            })
                .then((response) => response.json())

                .then((data) => {
                    console.log("messages", data);
                })

                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert('Nie wszystkie pola zostały wypełnione.');
        }
    }

    handleReset = (event) => {
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({message: ''});

        this.inputNameRef.current.focus();
    }

    componentDidMount() {
        this.inputNameRef.current.focus();
        const url = new URL(window.location.href);
        const port = (url.port ? `:${url.port}` : "");
        this.setState({ apiAddress: `${url.protocol}//${url.hostname}${port}/api${url.pathname}` });
    }    

    render() {
        const buttonSendEnabled = !(
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.message.length > 0
        );

        const buttonResetEnabled = !(
            this.state.name.length > 0 ||
            this.state.email.length > 0 ||
            this.state.message.length > 0
        );            

        return (
            <div className="contact">
                <form className="contact__form" onSubmit={this.handleSubmit}>
                    <h3 className="contact__title">Formularz kontaktowy</h3>

                    <input 
                        type="text"
                        placeholder="Imię"
                        autoFocus={true}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        ref={this.inputNameRef}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />

                    <textarea
                        placeholder="Treść"
                        rows="6"
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                        >
                    </textarea>

                    <div className="contact__buttons">
                        <input
                            className="buttonSend"
                            type="submit"
                            disabled={buttonSendEnabled}
                            value={this.state.buttonSendValue}
                        />

                        <input
                            className="buttonReset"
                            type="reset"
                            disabled={buttonResetEnabled}
                            value={this.state.buttonResetValue}
                            onClick={this.handleReset}
                        />
                    </div>
                </form>
 

            </div>
        );
    }
}

export default ContactInfo;
