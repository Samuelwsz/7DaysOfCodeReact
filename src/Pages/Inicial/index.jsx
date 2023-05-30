import Cabecalho from "@/Components/Cabecalho"

import fundoAmarelo from "/Images/fundoAmarelo.png"
import plantaInicio from "/Images/plantaInicial.png"

import styles from "./Inicial.module.css"
import Botao from "@/Components/Botao"

export default function Inicial() {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.fundoAmarelo}
          src={fundoAmarelo}
          alt="fundo amarelo a direita"
        />
      </div>
      <Cabecalho />
      <div className={styles.containerSecao}>
        <div className={styles.secaoEsquerda}>
          <p>Sua casa com as</p>
          <p>melhores plantas</p>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <Botao />
        </div>
        <div className={styles.secaoDireita}>
          <img src={plantaInicio} alt="Imagem planta grande" />
        </div>
      </div>
    </>
  )
}
