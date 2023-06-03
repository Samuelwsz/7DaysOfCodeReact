import Cabecalho from "@/Components/Cabecalho"
import styles from "./Home.module.css"
import Card from "@/Components/Card"
import { useEffect, useState } from "react"

export default function Home() {
  const [plantas, setPlantas] = useState([])
  const [filtroPreco, setFiltroPreco] = useState("")
  const [filtroNome, setFiltroNome] = useState("")

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/samuelwsz/api7DaysOfCodeReact/plantas"
    )
      .then((reposta) => reposta.json())
      .then((dados) => setPlantas(dados))
  }, [])

  const handleFiltrarPreco = () => {
    const filteredPlantas = plantas.filter(
      (planta) => planta.preco <= filtroPreco
    )
    setPlantas(filteredPlantas)
  }

  const handleFiltrarNome = () => {
    const filteredPlantas = plantas.filter((planta) =>
      planta.nome.toLowerCase().includes(filtroNome.toLowerCase())
    )
    setPlantas(filteredPlantas)
  }

  const handleLimparFiltro = () => {
    setFiltroPreco("")
    setFiltroNome("")
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
          <p>ofertas</p>
          <div>
            <input
              type="number"
              placeholder="Filtrar por preço"
              value={filtroPreco}
              onChange={(e) => setFiltroPreco(e.target.value)}
            />
            <button onClick={handleFiltrarPreco}>Filtrar</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Filtrar por nome"
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
            />
            <button onClick={handleFiltrarNome}>Filtrar</button>
          </div>
          <button onClick={handleLimparFiltro}>Limpar Filtro</button>
        </div>

        <section>
          {plantas.map((planta) => {
            return (
              <Card
                {...planta}
                key={planta.id}
              />
            )
          })}
        </section>
      </div>
    </>
  )
}
