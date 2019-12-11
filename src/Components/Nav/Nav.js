import React, {Component} from 'react'
import { withRouter } from "react-router";
import {Link} from 'react-router-dom'
import './Nav.css'
import home from './home.jpg';
import newPost from './newPost.png';
import logout from './logout.png';


class  Nav extends Component {

    render(){
        return(
            <div className='nav'>
                <section className='pic-home-post-container'>
                    <div className='pic-container'>
                        <section className='pic'>

                        </section>
                    </div>

                    <article className='home-post-container'>
                        <Link to='/dashboard'>
                            <button className='nav-clicks'>
                                <img  
                                src={home} 
                                alt="home" 
                                height='50px' 
                                width='80px'/>
                            </button>
                        </Link>
    <br/>
                        <Link to='/post/:postid'>
                                <button className='nav-clicks'>
                                    <img src={newPost} 
                                    alt="new post" 
                                    height='60vh' width='70px'/>
                                </button>
                            </Link>
                    </article>
                </section>

                <section className='logout-container'> 
                    <Link to='/'>
                        <button className='nav-clicks'>
                            <img 
                            src={logout} 
                            alt="logout" 
                            height='65vh' 
                            width='70px'/>
                        </button>
                    </Link>
                </section>   
            </div>
        )
    }
}
export default withRouter(Nav);