import styles from '../styles/components/Navbar.module.scss';
// import NavLink from '../NavLink';
// import Socials from '../Socials';
const links = ['Home', 'Experience', 'Skills', 'Work', 'About', 'Contact'];

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div>
        <p className="">Santiago Guastavino</p>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>

      {/* hamburguer */}
      {/* <div onClick={handleClick} className="md:hidden z-10">
        {mobileMenu === true
          ? <FontAwesomeIcon icon={faXmark} />
          : <FontAwesomeIcon icon={faBars} />
        }
      </div> */}

      {/* mobile menu */}
      {/* {mobileMenu === true &&
        <ul className="absolute top-0 left-0 w-full h-screen blue-background flex flex-col justify-center items-center">
          <Socials
            show
          />
          {
            links.map((link, i) => (
              <li
                key={i}
                link={link}
                mobile
                setMobileMenu={setMobileMenu}
              />
            ))
          }
        </ul>
      } */}
    </nav>
  )
}
