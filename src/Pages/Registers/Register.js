import React from 'react'
import styles from './Register.module.css'
import bgForm from '../../Assets/Img/imgForm/background_form.jpg'
export default function Register(props) {
    return (
        <div style={{width: '100%', height: '100%', position: 'fixed' }} className='d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className={styles.formGlobal}>
                    <div className='row'>
                        <div className='col-6'>
                        
                            <img className='img-fluid' style={{borderRadius:'5px'}} src={bgForm} alt="..." />
                        </div>
                        <div className='col-6'>
                            <h3>
                                E-Learning
                            </h3>
                            <form action="">
                                <div className='form-group'>
                                <i></i>
                                    <input type="text" className='form-control w-60' placeholder='Ten tai khoan' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" style={{width:'60%'}} className='form-control' placeholder='mat khau' />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
