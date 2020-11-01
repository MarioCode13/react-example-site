import React, { Component } from 'react'
import { Login, Register } from '../../../components/login/index'
import './SignUp.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginActive: true
        }
    }

    componentDidMount() {
        //Add .right by default
        this.RightSide.classList.add('right')
    }

    changeState() {
        const { isLoginActive } = this.state
        if (isLoginActive) {
            this.RightSide.classList.remove('right')
            this.RightSide.classList.add('left')
        } else {
            this.RightSide.classList.remove('left')
            this.RightSide.classList.add('right')
        }
        this.setState((prevState) => ({
            isLoginActive: !prevState.isLoginActive
        }))
    }

    render() {
        const { isLoginActive } = this.state
        const current = isLoginActive ? 'Register' : 'Login'
        const currentActive = isLoginActive ? 'Login' : 'Register'
        return (
            <>
                <div className='SignUp'>
                    <div className='login'>
                        <div className='container'>
                            {isLoginActive && (
                                <Login
                                    containerRef={(ref) => (this.current = ref)}
                                />
                            )}
                            {!isLoginActive && (
                                <Register
                                    containerRef={(ref) => (this.current = ref)}
                                />
                            )}
                        </div>
                        <RightSide
                            current={current}
                            containerRef={(ref) => (this.RightSide = ref)}
                            onClick={this.changeState.bind(this)}
                        />
                    </div>
                </div>
            </>
        )
    }
}

const RightSide = (props) => {
    return (
        <div
            className='right-side'
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className='inner-container'>
                <div className='text'>{props.current}</div>
            </div>
        </div>
    )
}

export default SignUp
