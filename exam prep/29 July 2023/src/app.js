import { page } from './lib.js';
import { updateNav } from './util.js';
import { showDashboard } from './views/dashboard.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showLogout } from './views/logout.js';
import { showRegister } from './views/register.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showDelete } from './views/delete.js';
import { onLike } from '../src/views/like.js';

updateNav();

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/logout', showLogout);
page('/dashboard', showDashboard);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/delete/:id', showDelete);
page('/like/:id', onLike);

page.start();