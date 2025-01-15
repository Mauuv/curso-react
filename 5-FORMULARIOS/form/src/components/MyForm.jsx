import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - Controlled Inputs

  // 3 - Gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [biography, setBiography] = useState(user ? user.biography : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);
  // console.log(role);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, biography, role);

    // 7 - Limpar form
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setBiography("");
  };

  return (
    <div>
      {/**5 - Envio de form */}
      {/**1 - Criação de forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/** 2 - Label envolvendo input */}
        <label>
          <span>Email</span>
          {/** 4 - Gerenciamento de dados inline (onChange). Quando só se quer o valor é aceitável fazer inline, mas se envolver mais validações, extrair para função */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          {/** 8 - Textarea */}
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Biografia do usuário"
            onChange={(e) => {
              setBiography(e.target.value);
            }}
            value={biography}
          ></textarea>
        </label>
        {/** 9 - select */}
        <label>
          <span>Função no Sistema</span>
          <select
            name="role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
          >
            <option value="user">Usário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
