import { React, useState } from 'react'

const ItemCount = ({stock}) => {

    //Logica contador

    const [contador, setContador] = useState(1);

    //suma 1
    const incrementar= () => {
        if (contador < stock){
            setContador(contar => contar + 1);
        }
    };

    //resta 1
    const decrementar = () => {
        if (contador > 0) {
            setContador(count => count - 1);
          }
    };
 
  
    
  return (
    <div>
  <div className="card bg-warning" style={{width: '18rem'}}>
    <img className="card-img-top" src="" alt="imagen item"/>
    <div className="card-body">
      <h5 className="card-title">Contador</h5>
      <p className="card-text">Contador</p>
      <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={incrementar}>+</button>
      <span className="">{contador}</span>
      <button className="btn btn-primary" onClick={decrementar}>-</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ItemCount