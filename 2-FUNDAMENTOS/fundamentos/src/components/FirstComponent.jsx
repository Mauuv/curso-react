//Arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  //Função para retornar o componente
  return <>
    {/*
    Comentário dentro do jsx
    */}
    <div>
      <h1>My First Component</h1>
      <p className="teste-classe">Teste Paragrafo</p>
      <MyComponent/>
    </div>
  </>;
};

export default FirstComponent;