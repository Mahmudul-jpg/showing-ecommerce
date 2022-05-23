import React from 'react';
import './sign-in.style.scss'
import Form from '../form/form.component'
import Button from '../button/button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        this.setState({ email: '', password: '' })

    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div class='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and passowrd</span>
                <form onSubmit={this.handleSubmit}>
                    <Form name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email'

                        required />





                    <Form name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password'
                        required />



                    <div class='btns'>
                        <Button type='submit'> Sign In </Button>
                        <Button onClick={signInWithGoogle} > Sign In With Google </Button>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;
// isGoogleSignIn