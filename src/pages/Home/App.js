import './style.js';
import gitLogo from '../../assets/images/githubLogo.png'
import { Container } from './style.js'
import Input from '../../components/Input/Input.js';
import ItemRepo from '../../components/ItemRepo/ItemRepo.js';
import { useState } from 'react';
import Button from '../../components/Button/Button.js';
import { api } from '../../services/api.js';


export default function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      } 
    } 
  } 

  const handleRemoveRepo = (id) => {
    const remove = repos.filter((repo) => repo.id !== id);
    setRepos(remove);
}

  return (
    <Container>
      <img 
      src = {gitLogo}
      alt = 'Logo do GitHub' 
      width = {72}
      height = {72}/>
      <Input value = {currentRepo} onChange = {(event) => { setCurrentRepo(event.target.value) }}/>
      <Button onClick = {handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo = {repo} handleRemoveRepo= {handleRemoveRepo}/>)}
    </Container>
  );
}

