import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"

import Logo from "/Images/logo.svg"

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={Logo} alt="Logo" />
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link to="/">
            <p>Como fazer</p>
          </Link>
        </li>
        <li>
          <Link to="/home">
            <p>Ofertas</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>Depoimentos</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>Vídeos</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>Meu carrinho</p>
          </Link>
        </li>
      </ul>
    </header>
  )
}
