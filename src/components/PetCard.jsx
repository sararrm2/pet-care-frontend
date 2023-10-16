
function PetCard({ pet }) {

  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{pet.name}</h5>
        <p className="card-text">{pet.id}</p>
        <p className="card-text"><strong>Date of Birth:</strong> {pet.dateOfBirth}</p>
        <p className="card-text">{product.breed}</p>
        <button onClick={handleClick} className="btn btn-primary">EDIT</button>
      </div>
    </div>
  );
}

export default PetCard;