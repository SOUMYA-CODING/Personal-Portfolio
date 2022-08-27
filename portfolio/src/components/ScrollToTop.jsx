import React from 'react'
import { useEffect } from 'react';

const ScrollToTop = () => {
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById('scrolltotop').style.display = "block"
        } else {
            document.getElementById('scrolltotop').style.display = "none"
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='scrolltotop' id='scrolltotop'>
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
            >
                <i class="fa-solid fa-arrow-up"></i>
            </button>
        </div>
    )
}

export default ScrollToTop