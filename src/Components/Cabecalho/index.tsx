import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"

import Logo from "../Icones/Logo"

export default function Cabecalho(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link to="/">
        <figure>
          <Logo />
        </figure>
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link to="/">
            <p>Como fazer</p>
          </Link>
        </li>
        <li>
          <Link to="/home">
            <p>Plantas</p>
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
