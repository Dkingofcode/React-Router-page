import { useState, useEffect } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
       <section>
         <form className='form' onSubmit={handleSubmit}>
            <h5>login</h5>
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>name</label>
                <input type="text" className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />     
            </div>
            <div className='form-row'>
                <label htmlFor='email' className='form-label'>email</label>
                <input type="email" className='form-input' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />     
            </div>
            <div className='form-row'>
                <label htmlFor='password' className='form-label'>password</label>
                <input type="password" className='form-input' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />     
            </div>
         </form>
       </section> 
    )
}






























