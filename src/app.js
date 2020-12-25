import React from "react"
import { render } from "react-dom"
import './styles.css'

const App = () => (
  <div class="flex h-screen bg-green-50">
  <div class="m-auto bg-green-400 p-8 rounded-xl">
    <h3>Webpack5 + TailwindCSS 2 🥳</h3>
  </div>
</div>
)
render(<App />, document.getElementById('root'));
