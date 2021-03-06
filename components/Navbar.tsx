import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Players', path: '/players' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
            alt="logo"
            src="/vercel.svg"
            width={60}
            height={60}
        />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname  === path
                        ? styles.active
                        : ''}>{title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
