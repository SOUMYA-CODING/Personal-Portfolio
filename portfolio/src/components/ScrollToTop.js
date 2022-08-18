import React from 'react'

const ScrollToTop = () => {

    window.onscroll = () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("scrolltotop").style.display = "block";
        } else {
            document.getElementById("scrolltotop").style.display = "none"
        }
    }

    return (
        <div className='scrolltotop' id='scrolltotop'>
            <a href="#home-page">
                <i class="fa-solid fa-arrow-up"></i>
            </a>
        </div>
    )
}

export default ScrollToTop