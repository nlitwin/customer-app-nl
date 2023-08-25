// import { useState } from "react"
import "./App.css"

function App() {
  // const [data, setData] = useState(null)
  // const onChange = (event) => {
  //   const file = event.target.files[0]
  //   const formData = new FormData()
  //   formData.append("file", file)

  //   fetch("https://titanstage.herokuapp.com/v2/seals/verify", {
  //     // fetch("http://localhost:3000/v2/seals/verify", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((resp) => resp.json())
  //     .then(setData)
  //     .catch((err) => console.error("Error: ", err))
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{JSON.stringify(data, null, 2)}</p> */}
        <div className="dropzone-wrapper">
          <div className="dropzone" id="titan-seal-verify" data-api-key="123" data-client-id="titanseal.com"></div>
        </div>
        {/* <br />
        <br />
        <br />
        <br />
        <input type="file" name="file" onChange={onChange} /> */}
      </header>
    </div>
  )
}

export default App
