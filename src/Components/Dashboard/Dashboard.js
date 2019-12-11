import React, {Component} from 'react'
import Nav from '../Nav/Nav';
import search from './search.png';
import './Dashboard.css';

class  Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
               Dashboard
               <Nav/>
               <input
               placeholder='Search By Title'/>

               <button className='search-click'>
                    <img
                    src={search}
                    alt="search" 
                    height='20vh' 
                    width='15px'/>
               </button>

               <button>
                   Reset
               </button>

            </div>
        )
    }
}

export default Dashboard;