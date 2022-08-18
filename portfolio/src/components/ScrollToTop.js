import React from 'react'

const ScrollToTop = () => {

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById('scrolltotop').style.display = "block"
        } else {
            document.getElementById('scrolltotop').style.display = "none"
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