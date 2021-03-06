import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link mr-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 active" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 active" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 active text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 active text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 active text-white" href="#">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;