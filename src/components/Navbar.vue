<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light-purple">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Vue App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" exact-active-class="active">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" exact-active-class="active">Contact Us</router-link>
            </li>
          </ul>
          <form class="d-flex ms-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-search" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  }
  </script>
  
  <style scoped>
  /* Navbar styling */
  .navbar-nav{
    margin-top: 10px;
  }
  .navbar {
    width: 100%;
    z-index: 1000; /* Ensure navbar stays on top */
  }
  
  .bg-light-purple {
    background-color: #d6aadd; /* Light purple background */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }
  
  .navbar-brand {
    font-weight: bold;
  }
  
  .nav-link {
    color: #333;
    font-size: 1rem;
    padding: 0.5rem 1rem; /* Add padding for better click area */
    margin-right: 0.5rem; /* Add margin between links */
    transition: color 0.3s, background-color 0.3s; /* Smooth transitions */
  }
  
  /* Change link color on hover */
  .nav-link:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2); /* Light background on hover */
    border-radius: 0.25rem; /* Rounded corners on hover */
  }
  
  /* Highlight the active link */
  .nav-link.active {
    color: #fff; /* White text color */
    background-color: #a57cc8; /* Darker purple background for active link */
    border-radius: 0.25rem; /* Rounded corners for active link */
  }
  
  /* Search form styling */
  .form-control {
    border-radius: 20px; /* Rounded search input */
  }
  
  .btn-search {
    border-radius: 20px; /* Rounded button */
    color: #ffffff; /* White text color */
    background-color: #000000; /* Charcoal gray background color */
    border: 1px solid #ccc; /* Light gray border */
  }
  
  .btn-search:hover {
    color: #fff; /* White text color on hover */
    background-color: #a57cc8; /* Light purple background on hover */
    border-color: #d6aadd; /* Matching border color on hover */
  }
  </style>
  