import React from 'react'

const Header = () => {
    return (
        <section className="header-wrapper">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    {/* ----- Website Logo ----- */}
                    <a href="#index" className="navbar-brand">
                        <svg width="280" height="50" viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_39_49)">
                                <g filter="url(#filter0_d_39_49)">
                                    <rect x="34" y="6" width="35" height="11" rx="5.5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter1_d_39_49)">
                                    <rect x="34" y="20" width="21" height="10" rx="5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter2_d_39_49)">
                                    <rect x="20" y="33" width="35" height="11" rx="5.5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter3_d_39_49)">
                                    <rect x="8" y="33" width="10" height="11" rx="5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter4_d_39_49)">
                                    <path d="M97.12 39H84.48C83.9733 39 83.6 38.8933 83.36 38.68C83.1467 38.44 83.04 38.0667 83.04 37.56V32.88C83.04 32.3733 83.1467 32.0133 83.36 31.8C83.6 31.56 83.9733 31.44 84.48 31.44H95.24C95.5867 31.44 95.84 31.3333 96 31.12C96.1867 30.88 96.28 30.6 96.28 30.28C96.28 29.8267 96.1867 29.4933 96 29.28C95.84 29.0667 95.5867 28.9467 95.24 28.92L89.24 28.08C87.3733 27.8133 85.8667 27.2 84.72 26.24C83.6 25.28 83.04 23.68 83.04 21.44V17.24C83.04 14.9733 83.7733 13.24 85.24 12.04C86.7067 10.8133 88.7333 10.2 91.32 10.2H102.52C103.027 10.2 103.387 10.32 103.6 10.56C103.84 10.7733 103.96 11.1333 103.96 11.64V16.4C103.96 16.9067 103.84 17.28 103.6 17.52C103.387 17.7333 103.027 17.84 102.52 17.84H93.2C92.8533 17.84 92.5867 17.96 92.4 18.2C92.2133 18.4133 92.12 18.6933 92.12 19.04C92.12 19.3867 92.2133 19.68 92.4 19.92C92.5867 20.16 92.8533 20.2933 93.2 20.32L99.16 21.12C101.027 21.3867 102.533 22 103.68 22.96C104.827 23.92 105.4 25.52 105.4 27.76V31.96C105.4 34.2267 104.653 35.9733 103.16 37.2C101.693 38.4 99.68 39 97.12 39ZM134.176 31.44C134.176 32.6667 133.989 33.7867 133.616 34.8C133.269 35.7867 132.629 36.64 131.696 37.36C130.789 38.0533 129.522 38.6 127.896 39C126.296 39.4 124.256 39.6 121.776 39.6C119.296 39.6 117.242 39.4 115.616 39C113.989 38.6 112.709 38.0533 111.776 37.36C110.869 36.64 110.229 35.7867 109.856 34.8C109.509 33.7867 109.336 32.6667 109.336 31.44V17.8C109.336 16.5733 109.509 15.4667 109.856 14.48C110.229 13.4667 110.869 12.6 111.776 11.88C112.709 11.16 113.989 10.6 115.616 10.2C117.242 9.8 119.296 9.6 121.776 9.6C124.256 9.6 126.296 9.8 127.896 10.2C129.522 10.6 130.789 11.16 131.696 11.88C132.629 12.6 133.269 13.4667 133.616 14.48C133.989 15.4667 134.176 16.5733 134.176 17.8V31.44ZM118.416 30C118.416 30.5333 118.616 30.9867 119.016 31.36C119.416 31.7067 120.336 31.88 121.776 31.88C123.216 31.88 124.136 31.7067 124.536 31.36C124.936 30.9867 125.136 30.5333 125.136 30V19.24C125.136 18.7333 124.936 18.3067 124.536 17.96C124.136 17.5867 123.216 17.4 121.776 17.4C120.336 17.4 119.416 17.5867 119.016 17.96C118.616 18.3067 118.416 18.7333 118.416 19.24V30ZM163.788 31.44C163.788 32.6667 163.601 33.7867 163.228 34.8C162.881 35.7867 162.241 36.64 161.308 37.36C160.401 38.0533 159.148 38.6 157.548 39C155.948 39.4 153.908 39.6 151.428 39.6C148.948 39.6 146.908 39.4 145.308 39C143.708 38.6 142.441 38.0533 141.508 37.36C140.601 36.64 139.961 35.7867 139.588 34.8C139.241 33.7867 139.068 32.6667 139.068 31.44V11.64C139.068 11.1333 139.174 10.7733 139.388 10.56C139.628 10.32 140.001 10.2 140.508 10.2H146.788C147.294 10.2 147.654 10.32 147.868 10.56C148.108 10.7733 148.228 11.1333 148.228 11.64V29.88C148.228 30.4133 148.428 30.8667 148.828 31.24C149.228 31.5867 150.121 31.76 151.508 31.76C152.921 31.76 153.828 31.5867 154.228 31.24C154.628 30.8667 154.828 30.4133 154.828 29.88V11.64C154.828 11.1333 154.934 10.7733 155.148 10.56C155.388 10.32 155.761 10.2 156.268 10.2H162.348C162.854 10.2 163.214 10.32 163.428 10.56C163.668 10.7733 163.788 11.1333 163.788 11.64V31.44ZM176.512 39H170.552C170.045 39 169.672 38.8933 169.432 38.68C169.218 38.44 169.112 38.0667 169.112 37.56V11.64C169.112 11.1333 169.218 10.7733 169.432 10.56C169.672 10.32 170.045 10.2 170.552 10.2H176.992C177.418 10.2 177.765 10.2933 178.032 10.48C178.325 10.6667 178.592 10.9733 178.832 11.4L182.432 17.92C182.565 18.16 182.672 18.3333 182.752 18.44C182.858 18.5467 182.992 18.6 183.152 18.6H183.512C183.672 18.6 183.792 18.5467 183.872 18.44C183.978 18.3333 184.098 18.16 184.232 17.92L187.792 11.4C188.032 10.9733 188.285 10.6667 188.552 10.48C188.845 10.2933 189.205 10.2 189.632 10.2H196.112C196.618 10.2 196.978 10.32 197.192 10.56C197.432 10.7733 197.552 11.1333 197.552 11.64V37.56C197.552 38.0667 197.432 38.44 197.192 38.68C196.978 38.8933 196.618 39 196.112 39H189.952C189.445 39 189.072 38.8933 188.832 38.68C188.618 38.44 188.512 38.0667 188.512 37.56V23.48L186.152 27.84C185.912 28.2933 185.618 28.6267 185.272 28.84C184.952 29.0267 184.538 29.12 184.032 29.12H182.432C181.925 29.12 181.498 29.0267 181.152 28.84C180.832 28.6267 180.552 28.2933 180.312 27.84L177.952 23.48V37.56C177.952 38.0667 177.832 38.44 177.592 38.68C177.378 38.8933 177.018 39 176.512 39ZM217.657 39H211.177C210.67 39 210.297 38.8933 210.057 38.68C209.844 38.44 209.737 38.0667 209.737 37.56V32.44L203.617 24.24C203.004 23.4133 202.59 22.6933 202.377 22.08C202.19 21.4667 202.097 20.5467 202.097 19.32V11.64C202.097 11.1333 202.204 10.7733 202.417 10.56C202.657 10.32 203.03 10.2 203.537 10.2H209.697C210.204 10.2 210.564 10.32 210.777 10.56C211.017 10.7733 211.137 11.1333 211.137 11.64V18.2C211.137 18.4667 211.15 18.7467 211.177 19.04C211.204 19.3333 211.31 19.6133 211.497 19.88L213.337 22.76C213.47 23 213.604 23.1733 213.737 23.28C213.897 23.3867 214.084 23.44 214.297 23.44H214.697C214.91 23.44 215.084 23.3867 215.217 23.28C215.377 23.1733 215.524 23 215.657 22.76L217.497 19.88C217.684 19.6133 217.79 19.3333 217.817 19.04C217.844 18.7467 217.857 18.4667 217.857 18.2V11.64C217.857 11.1333 217.964 10.7733 218.177 10.56C218.417 10.32 218.79 10.2 219.297 10.2H225.257C225.764 10.2 226.124 10.32 226.337 10.56C226.577 10.7733 226.697 11.1333 226.697 11.64V19.32C226.697 20.5467 226.59 21.4667 226.377 22.08C226.164 22.6933 225.764 23.4133 225.177 24.24L219.097 32.48V37.56C219.097 38.0667 218.977 38.44 218.737 38.68C218.524 38.8933 218.164 39 217.657 39ZM240.684 18.6L238.804 24.68H245.084L243.204 18.6C243.098 18.36 242.978 18.1867 242.844 18.08C242.738 17.9733 242.604 17.92 242.444 17.92H241.444C241.284 17.92 241.138 17.9733 241.004 18.08C240.898 18.1867 240.791 18.36 240.684 18.6ZM238.404 37.56C238.404 38.0667 238.284 38.44 238.044 38.68C237.831 38.8933 237.471 39 236.964 39H231.084C230.578 39 230.204 38.8933 229.964 38.68C229.751 38.44 229.644 38.0667 229.644 37.56V27C229.644 26.2 229.764 25.28 230.004 24.24C230.271 23.2 230.671 21.9867 231.204 20.6L234.684 11.52C234.844 11.0667 235.084 10.7333 235.404 10.52C235.751 10.3067 236.191 10.2 236.724 10.2H247.484C247.991 10.2 248.404 10.3067 248.724 10.52C249.071 10.7333 249.324 11.0667 249.484 11.52L252.964 20.6C253.498 21.9867 253.884 23.2 254.124 24.24C254.391 25.28 254.524 26.2 254.524 27V37.56C254.524 38.0667 254.404 38.44 254.164 38.68C253.951 38.8933 253.591 39 253.084 39H247.044C246.511 39 246.111 38.8933 245.844 38.68C245.604 38.44 245.484 38.0667 245.484 37.56V31.96H238.404V37.56ZM268.423 39H260.343C259.836 39 259.463 38.8933 259.223 38.68C259.01 38.44 258.903 38.0667 258.903 37.56V29.44C258.903 28.9333 259.01 28.5733 259.223 28.36C259.463 28.12 259.836 28 260.343 28H268.423C268.93 28 269.29 28.12 269.503 28.36C269.743 28.5733 269.863 28.9333 269.863 29.44V37.56C269.863 38.0667 269.743 38.44 269.503 38.68C269.29 38.8933 268.93 39 268.423 39Z" fill="#F0F8FF" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_39_49" x="30" y="6" width="43" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter1_d_39_49" x="30" y="20" width="29" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter2_d_39_49" x="16" y="33" width="43" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter3_d_39_49" x="4" y="33" width="18" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter4_d_39_49" x="83.04" y="8.6001" width="194.823" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="3" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <clipPath id="clip0_39_49">
                                    <rect width="280" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    {/* ----- Hamburger Icon ----- */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="assets/icons/icon_menu.png" alt="" />
                    </button>

                    {/* ----- Navbar Menu ----- */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home-page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-page">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skill-page">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project-page">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog-page">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fa-solid fa-sun"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;