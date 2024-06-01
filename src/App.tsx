import { useState, ChangeEvent, FormEvent } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tel: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData.nome);
    console.log(formData.email);
    console.log(formData.tel);
  }

  const handleChance = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

          <div>
           <h1>Formulário</h1>
          </div>
        
          <div>
            <p>Nome: </p>
            <input type='text' onChange={handleChance} name="nome" value={formData.nome} />
          </div>

          <div>
            <p>Email: </p>
            <input type='text' onChange={handleChance} name="email" value={formData.email} />
          </div>

          <div>
            <p>Telefone: </p>
            <input type='text' onChange={handleChance} name="tel" value={formData.tel} />
          </div>

          <div>
            <button type='submit'>Salvar</button>
          </div>
          
      

      </form>
    </>
  )
}

export default App
