import React from 'react'
import { Route } from 'react-router'
import BackToTop from '../../Components/BackTop/BackToTop'
import FooterPage from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

export default function HomeTemplate(props) {
    // Path, component
    return (
        <>
            <Route path={props.path} render={(propsRoute) => {
                return <>
                    <Header />
                    <props.component {...propsRoute} />
                    <BackToTop />
                    <FooterPage />
                </>
            }}

            />
        </>
    )
}
