import { useState } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState(null)
  const onChange = (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append("file", file)

    fetch("https://titanstage.herokuapp.com/v2/seals/verify", {
      // fetch("http://localhost:3000/v2/seals/verify", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then(setData)
      .catch((err) => console.error("Error: ", err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <pre>{JSON.stringify(data)}</pre>
        <input type="file" name="file" onChange={onChange} />
      </header>
    </div>
  )
}

export default App
