import styles from "./Card.module.css"

import Seta from "/Images/seta.svg"

import { Link } from "react-router-dom"

export default function Card({ nome, preco, imagem }) {
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
            <span>Comprar</span>
            <img src={Seta} alt="Icone seta" />
          </Link>
        </div>
      </div>
    </div>
  )
}
