function NewCard() {
  let newContact = {
    name: String,
  img: String,
 phone: String,
  email: String,
}

  return <div>
     <h2>{newContact.name}</h2>
    <img {newContact.img}/>
    <p>{newContact.phone}</p>
    <p>{newContact.email}</p>
    </div>
}

export default NewCard;