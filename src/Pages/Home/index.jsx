import Cabecalho from "@/Components/Cabecalho"
import styles from "./Home.module.css"
import Card from "@/Components/Card"

export default function Home() {
  return (
    <>
      <Cabecalho />
      <div className={styles.container}>
        <div className={styles.home}>
          <p>Conheça nossas</p>
          <p>ofertas</p>
        </div>
        <section>
          <Card
            imagem="/Images/Ajuga_reptans.png"
            nome="Ajuga reptans"
            preco="50,00"
          />
        </section>
      </div>
    </>
  )
}
