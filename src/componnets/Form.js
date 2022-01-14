import React, { useState } from 'react';

const Form = () => {

    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const handeleSubmit = (e) =>{
        e.preventDefaut();
        alert(
            `
            Email: ${email},
            Phone: ${phone},
            `
        );
    }
    return (
        <div className='form'>
         <form onSubmit={handeleSubmit} >
         <div className="form-content">
                <p className='title'>INTRODUCING</p>
                <h1 className='title-1'>Drive<span>.</span></h1>
                <p className='title-2'>We’re an EV marketplace that has everything you <br />
                    need to research, buy, and finance your new EV. <br />
                    And you can do it all from the comfort of your home.
                </p>
                <h3>Sign up for updates about Drive's launch and exclusive access to perks.</h3>
                <div className="formulaire">
                    <div className="input">
                        <input type="text" placeholder='Enter your email' name='email'
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        />
                    </div>
                    <li></li>
                    <div className="input">
                        <input type="number" placeholder='Telephone number' name='phone'
                        value={phone}
                        onChange={e=>setPhone(e.target.value)} />
                    </div>
                    

                    <button >Keep me updated</button>

                    <p>By signing up you agree to receive email and/or text messages from Drive regarding our 
                        launch and our products. Message and data rates may apply. You may cancel at any time.
                    </p>
                    <h2>LAUNCHING IN EARLY 2022</h2>
                </div>
            </div>
         </form>
        </div>
    );
};

export default Form;