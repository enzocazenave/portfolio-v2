window.onload = () => {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const logo = document.querySelector('.navbar-logo');
        const sections = document.querySelectorAll('section');
        const nav_items = document.querySelectorAll('.navbar-item');

        // FIJAR NAVBAR
        navbar.classList.toggle('active', scrollY > 0);
        logo.classList.toggle('active', scrollY > 0);

        // NAVBAR ITEMS SELECTED
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section;
            }
        });

        nav_items.forEach(a => {
            a.classList.remove('SELECTED-navbar-item');

            if (a.id == (`${current.getAttribute('id')}-item`)) {
                a.classList.add('SELECTED-navbar-item');
            }
        });
    });
}