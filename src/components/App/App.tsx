import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import logo2Png from '@/assets/Logo2.png'
import logo1Jpg from '@/assets/Logo1.jpg'
import Logo3Svg from '@/assets/Logo3.svg'

function TODO() {
    TODO2()

}function TODO2() {
    // throw new Error();
}

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1)
        TODO();
    }
    // TODO('51325')
    // if (__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILELATFORM</div>
    // }
    //
    // if (__ENV__ === 'development') {
    //     // addDevtools()
    // }

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={logo2Png} alt=""/>
                <img width={100} height={100} src={logo1Jpg} alt=""/>
            </div>
            <div>
                <Logo3Svg className={classes.icon} width={100} height={100} />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <br/>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>Knopka</span></button>
            <About />
        </div>
    );
};

export default App;