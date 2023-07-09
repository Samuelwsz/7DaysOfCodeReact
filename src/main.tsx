import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import AppRoutes from "./routes"

const rootElement = document.getElementById("root")
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  )
} else {
  throw new Error("Element with ID 'root' not found.")
}
