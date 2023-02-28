import React from 'react';
import './Categories.scss'
import {Link} from 'react-router-dom'

function Categories() {
    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img alt='' src='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <button>
                        <Link to='/products/1' className='link'>Sale</Link>
                    </button>
                </div>
                <div className='row'>
                    <img alt='' src='https://images.unsplash.com/photo-1621506821957-1b50ab7787a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'/>
                    <button>
                        <Link to='/products/1' className='link'>Outdoor</Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img alt='' src='https://images.unsplash.com/photo-1594760136382-0c07cc163715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80'/>
                    <button>
                        <Link to='/products/1' className='link'>New</Link>
                    </button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img alt='' src='https://images.unsplash.com/photo-1521022969448-49639904ed7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                            <button>
                                <Link to='/products/1' className='link'>Indoor</Link>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img alt='' src='https://images.unsplash.com/photo-1488116593952-937c38246bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'/>
                            <button>
                                <Link to='/products/1' className='link'>Kitchen sets</Link>
                            </button>
                        </div>
                    </div>
                    </div>
                <div className='row'>
                    <img alt='' src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <button>
                        <Link to='/products/1' className='link'>Table sets</Link>
                    </button>
                </div>
            </div>
            </div>

    );
}

export default Categories;