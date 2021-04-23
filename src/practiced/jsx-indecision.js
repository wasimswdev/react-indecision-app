const app = {
    title : 'Indecision App',
    subtitle : 'Give you decision in the hands of a computer',
    options : []
  } 
  
  const onFuncSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.text.value
    if(option){
      app.options.push(option)
      e.target.elements.text.value = ''
      renderApp()
    }
  }
  
  const removeAll = () => {
    app.options= []
    renderApp()
  }
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
  }
  
  
  const renderApp = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <ol>
        {app.options.length > 0 &&
          app.options.map((option) => {
            return <li key={option}>{option}</li>
        })
      }
      </ol>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
        <button onClick={removeAll}>Remove all</button>
        <form onSubmit={onFuncSubmit}>
        <input type='text' name='text'/>
        <button>Add</button>
        </form>
      </div>
      
    )
    ReactDOM.render(template, document.getElementById('root'))
  
  }
  
  renderApp()