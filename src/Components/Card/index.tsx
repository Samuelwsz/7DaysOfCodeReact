import styles from "./Card.module.css"

import { Link } from "react-router-dom"

import Seta from "../Icones/Seta"
import { IDadosPlantas } from "../Interface/IDadosPlantas"

export default function Card({ nome, preco, imagem }: IDadosPlantas) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={imagem} alt="" />
      </div>
      <div className={styles.conteudoContainer}>
        <h2>{nome}</h2>
        <p>R$ {preco}</p>
        <br />
        <div className={styles.msgIcone}>
          <Link className={styles.link} to="/">
            <span>
              Comprar <Seta />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
