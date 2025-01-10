import PropTypes from 'prop-types';


const UserDetails = ({ name, age, profession}) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{profession}</li>
      </ul>
      {age >= 18 ? (
        <p>Pode tirar a carteira de habilitação</p>
      ) : (
        <p>Não pode tirar a carteira de habilitação</p>
      )}
    </div>
  )
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  profession: PropTypes.string.isRequired,
};

export default UserDetails