function navbar() {
    return `
    <nav class="navigator">
        <div class="navigator-conteiner">
            <a href="index.html">
                <img class="logo" src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg" alt="">
            </a>
            
            <div class="navigator-conteiner-desktop">
                <ul class="navigator-conteiner-link">
                    <li>
                        <a class="nav-link" href="tableUser.html">Users</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Landing</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Pages</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Accounts</a>
                    </li>
                    <li>
                        <a class="nav-link">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                    </li>
                </ul>
                <form class="form-search">
                    <span class="lupa">
                        <i class="text-light-gray-purple fas fa-search"></i>
                    </span>
                    <input class="button-search" type="text" placeholder="Search Courses">
                </form>
            </div>

        </div>
        <div class="navigator-conteiner">
            <ul class="navigator-conteiner-menu">
                <li class="notification">
                    <a href="">
                        <i class="text-light-gray-purple bell far fa-bell"></i>
                    </a>
                </li>
                <li>
                    <img class="perfil" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg" width="45" alt="">
                </li>
            </ul>
            <div>
                <input type="checkbox" id="btn-menu">
                <label for="btn-menu" class="label-btn-menu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </label>
                <nav class="m">
                    <ul>
                        <li class="m-item">
                            <a class="m-item-link" href="">Home</a>
                        </li>
                        <li class="m-item">
                            <a class="m-item-link" href="">Products</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </nav>
    `
}