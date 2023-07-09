import { ChangeEvent, useState } from "react"
import styles from "./Botao.module.css"

interface BotaoProps {
  Type?: "button" | "submit" | "reset"
}

export default function Botao({ Type = "button" }: BotaoProps) {
  const [email, setEmail] = useState<string>("")
  const [msgAlerta, setMsgAlerta] = useState<string>("")

  const trocarEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const assinarNewsletter = () => {
    validarEmail(email)
      ? setMsgAlerta(
          `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`
        )
      : setMsgAlerta("Por favor, insira um e-mail válido.")
  }

  const validarEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }

  return (
    <>
      <div className={styles.containerBotao}>
        <input
          type="text"
          placeholder="Insira seu e-mail"
          value={email}
          onChange={trocarEmail}
        />
        <button onClick={assinarNewsletter} type={Type}>
          Assinar newsletter
        </button>
      </div>
      {msgAlerta && <div>{msgAlerta}</div>}
    </>
  )
}
