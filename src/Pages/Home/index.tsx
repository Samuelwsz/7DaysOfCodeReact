import Cabecalho from "../../Components/Cabecalho"
import styles from "./Home.module.css"
import Card from "../../Components/Card"
import React, { useEffect, useState, FormEvent } from "react"
import { IDadosPlantas } from "../../Components/Interface/IDadosPlantas"

export default function Home() {
  const [plantas, setPlantas] = useState<IDadosPlantas[]>([])

  const [filtroPreco, setFiltroPreco] = useState("")
  const [filtroNome, setFiltroNome] = useState("")
  const [mensagem, setMensagem] = useState("")

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/samuelwsz/api7DaysOfCodeReact/plantas"
    )
      .then((reposta) => reposta.json())
      .then((dados) => setPlantas(dados))
  }, [])

  const handleFiltrarPreco = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const filteredPlantas = plantas.filter(
      (planta) =>
        parseFloat(planta.preco.replace(",", ".")) <= parseFloat(filtroPreco)
    )
    setPlantas(filteredPlantas)
  }

  const handleFiltrarNome = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const filteredPlantas = plantas.filter((planta) =>
      planta.nome.toLowerCase().includes(filtroNome.toLowerCase())
    )
    setPlantas(filteredPlantas)

    if (filteredPlantas.length === 0) {
      setMensagem("Nome não existe")
    } else {
      setMensagem("")
    }
  }

  const handleLimparFiltro = () => {
    setFiltroPreco("")
    setFiltroNome("")
    setMensagem("")
    // Recarrega a lista original de plantas da API
    fetch(
      "https://my-json-server.typicode.com/samuelwsz/api7DaysOfCodeReact/plantas"
    )
      .then((reposta) => reposta.json())
      .then((dados) => setPlantas(dados))
  }

  return (
    <>
      <Cabecalho />
      <div className={styles.container}>
        <div className={styles.home}>
          <p>Conheça nossas</p>
          <p>Plantas</p>
          <form onSubmit={handleFiltrarPreco}>
            <input
              type="number"
              placeholder="Filtrar por preço"
              value={filtroPreco}
              onChange={(e) => setFiltroPreco(e.target.value)}
            />
            <button type="submit">Filtrar</button>
          </form>
          <form onSubmit={handleFiltrarNome}>
            <input
              type="text"
              placeholder="Filtrar por nome"
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
            />
            <button type="submit">Filtrar</button>
          </form>
          <button onClick={handleLimparFiltro}>Limpar Filtro</button>
        </div>
        {mensagem && <p style={{ textAlign: "center" }}>{mensagem}</p>}
        <section>
          {plantas.map((planta) => {
            return <Card {...planta} key={planta.id} />
          })}
        </section>
      </div>
    </>
  )
}
