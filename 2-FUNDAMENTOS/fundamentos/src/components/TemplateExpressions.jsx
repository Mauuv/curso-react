const TemplateExpressions = () => {

  const name = 'Mauricio';
  const data = {
    age: 50,
    job: "Engineer"
  };

  return (
    <>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como {data.job}</p>
      <p>{4*4}</p>
      <p>{console.log("Hello")}</p>
    </>
  );
}

export default TemplateExpressions;