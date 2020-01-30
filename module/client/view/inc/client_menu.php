<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">WebShop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Products
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink-333">
          <a class="dropdown-item" href="#">Tablets</a>
          <a class="dropdown-item disabled" href="#">Mobiles</a>
          <a class="dropdown-item disabled" href="#">TVs</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Offers</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user"></i><span>Login</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right bg-dark"
                aria-labelledby="navbarDropdownMenuLink-333">
                <a id="login" class="dropdown-item" href="#">Login</a>
                <a class="dropdown-item" href="#">Register</a>
                <a class="nav-link" href="index.php">Admin Panel</a>
            </div>
        </li>
        <li>
          <div id="lang" >
            <select id="la" class="form-control form-control-sm">
                <option id="en" value="en" data-tr="English"></option>
                <option  id="es" value="es" data-tr="Spanish"></option>
                <option  id="de" value="de" data-tr="German"></option>
            </select>
          </div>
      </li>
    </ul>
  </div>
</nav>