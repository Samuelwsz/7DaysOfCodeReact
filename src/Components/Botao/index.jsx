import { useState } from "react"
import styles from "./Botao.module.css"



export default function Botao({ Type = "button" }) {
  const [email, setEmail] = useState("")
  const [msgAlerta, setMsgAlerta] = useState("")

  const trocarEmail = (event) => {
    setEmail(event.target.value)
  }

  
  const assinarNewsletter = () => {
    validarEmail(email)
      ? setMsgAlerta(
          `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`
        )
      : setMsgAlerta("Por favor, insira um e-mail válido.")
  }

  const validarEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }

  return (
    <>
      <div className={styles.containerBotao} type={Type}>
        <input
          type="text"
          placeholder="Insira seu e-mail"
          value={email}
          onChange={trocarEmail}
        />
        <button onClick={assinarNewsletter}>Assinar newsletter</button>
      </div>
      {msgAlerta && <div>{msgAlerta}</div>}
    </>
  )
}
