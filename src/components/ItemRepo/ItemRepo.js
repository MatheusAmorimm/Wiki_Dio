import { ItemContainer } from "./style";

export default function ItemRepo( {repo, handleRemoveRepo} ) {

  const remove = () =>{
    handleRemoveRepo(repo.id);
  }
  
  return (
    <ItemContainer onClick={remove}>
      <h3>{repo.name}</h3>
      <p> {repo.full_name} </p>
      <a href= {repo.html_url} target="blank" rel="noreferrer">Ver repositório</a>
      <a href="#" rel="noreferrer" className="remover">Remover</a>
      <hr/>
    </ItemContainer>
  )
}
