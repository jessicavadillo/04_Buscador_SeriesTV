import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.svg'

const Header = () => {
  return (
    <div className='container-fluid header-container'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4'>
        <NavLink
          to='/'
          className='d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
        >
          <img src={logo} alt='Logo' className='logo' />
          <svg className='bi me-2' width={40} height={32}>
            <use xlinkHref='#bootstrap' />
          </svg>
          <span className='fs-4'>FlickFinder X TVmaze</span>
        </NavLink>
      </header>
    </div>

  )
}

export default Header
