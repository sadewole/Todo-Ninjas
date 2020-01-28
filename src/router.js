import Dashboard from './views/Dashboard'
import Team from './views/Team'
import Projects from './views/Projects'

export default [{
    path: '/',
    name: 'dashboard',
    component: Dashboard
}, {
    path: '/team',
    name: 'team',
    component: Team
}, {
    path: '/projects',
    name: 'projects',
    component: Projects
}]