// import { useState } from "react"
import "./App.css"

function App() {
  // const [result, setResult] = useState(null)
  // const apiKey = "80569edbdcd93e9f8e3660c17de9f3e8"
  // const clientId = "utahcounty.gov"
  // const handleChange = async (e) => {
  //   const file = e.target.files[0]
  //   console.log(e.target.files[0])
  //   const data = new FormData()
  //   data.append("file", file)
  //   try {
  //     setResult(null)
  //     const response = await fetch("https://titanstage.herokuapp.com/v2/seals/verify", {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "X-API-Key": apiKey,
  //         "X-Client-Id": clientId,
  //       },
  //       body: data,
  //     })

  //     const jsonResponse = await response.json()
  //     console.log(jsonResponse)
  //     setResult(jsonResponse)
  //   } catch (e) {
  //     setResult(e)
  //     console.error(e)
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div
          id="titan-seal-verify"
          data-api-key="123"
          data-client-id="titanseal.com"
          data-env="staging"
          data-domain-allowlist="titanseal3.com, titanseal.com,titanseal2.com"
        ></div>
        {/* <p>Custom UI code hitting the Titan Seal API directly</p>
        <input type="file" onChange={handleChange} />
        <p>Result of upload:</p>
        <pre>{JSON.stringify(result, null, 2)}</pre> */}
      </header>
    </div>
  )
}

export default App
