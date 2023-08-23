import "./App.css"

function App() {
  const onChange = (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append("file", file)

    fetch("https://titanstage.herokuapp.com/v2/seals/verify", {
      // fetch("http://localhost:3000/v2/seals/verify", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((resp) => {
        // console.log(resp)
        resp.json()
      })
      .then((result) => console.log("success: ", result))
      .catch((err) => console.error("Error: ", err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" name="file" onChange={onChange} />
      </header>
    </div>
  )
}

export default App
