import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
    return (
        <>
            <nav>
                <button onClick={() => {
                    setExpandNavbar(!expandNavbar)
                }}><MenuIcon /></button>
                <ul className={expandNavbar && 'open' || 'close'}>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' >About</Link>
                    </li>
                    <li>
                        <Link to='/portfolio' >Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

