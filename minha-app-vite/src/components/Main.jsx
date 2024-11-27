import Button from 'react-bootstrap/Button';

const Main = () => {
  let nome = ["João","Maria","Pedro"];

  const getNome = () => {
    return nome;
  };
  return <main>{getNome()}
  <ul>
    {nomes.map((nome) => {return <li>nome</li>;
  })}
  </ul>
  </main>;
  
};

export default Main