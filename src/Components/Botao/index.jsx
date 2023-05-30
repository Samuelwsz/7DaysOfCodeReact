import styles from "./Botao.module.css"

export default function Botao({ Type = "button" }) {
  return (
    <div className={styles.containerBotao} type={Type}>
      <input type="text" placeholder="Insira seu e-mail" />
      <button>Assinar newsletter</button>
    </div>
  )
}
