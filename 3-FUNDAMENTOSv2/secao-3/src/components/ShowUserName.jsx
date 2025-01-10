const ShowUserName = (props) => {
  console.log(props);
  return (
    <>
      <h2>O nome do usuário é: {props.name}</h2>
    </>
  )
}

export default ShowUserName