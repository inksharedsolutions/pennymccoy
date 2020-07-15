import React from 'react'
import Inputs from 'components/Inputs/inputs'
import Nav from 'components/navigation'

const Contact = (props) =>{

	function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
    }
    
    return (
        <>
            <Nav/>
            <main className="non-front-page">
                <div className="flex-container-fx">

                        <h1 className="heading-contact">Get in <span>Touch</span></h1>
                        <p className="contactMessage">
                            Hello! Are you having a good day? Anyway, if you have any concerns or you just want to 
                            share something, please feel free to drop me a line. I would love to hear anything from you.
                        </p>

                        {/* <p className="meta-other-link">
                            Also visit my other page : 
                            <span>
                                <a href="http://www.larryellerbee.com/" target="_blank">larryellerbee.com</a>
                            </span>
                        </p> */}

                        <form 
                            onSubmit={OnSubmitForm}
                            action="https://formspree.io/xvopdpny"
                            method="POST">

                        <div className="columns-grid-parent" id="form-wrapper">
                            <div className="column-grid-child">
                        
                                <Inputs 
                                    name="fullname" 
                                    type="text" />

                                <Inputs
                                    name="phone" 
                                    type="text" />

                            </div>

                            <div className="column-grid-child">

                                <Inputs 
                                    name="email"
                                    type="email" />

                                <Inputs 
                                    name="address" 
                                    type="text" />

                            </div>
                        </div>

                        <div className="columns">
                            <div className="column is-full" id="textAreaContainer">
                                <label> Message	</label>
                                <textarea type="text" name='message' 
                                    className="textArea"
                                    placeholder='Message'
                                    required />
        

                                <div className="buttonContainer">
                                    <input 
                                        className="abtiaryButton" 
                                        value="Submit"
                                        type="submit" />
                                </div>
                            </div>
                        </div>

                    </form>


                    <div className="info-section-address">
                        <span>
                            <h5>Address</h5>
                            831 N Tatnall Street, Suite M #188 Wilmington,
                            DE 19801
                        </span>

                        <span>
                            <h5>Phone</h5>
                            888-323-7009
                        </span>

                        <span>
                            <h5>Email</h5>
                            learnhowtoreceivefromgod@gmail.com
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
    
}

export default Contact;