import { Cart } from './styles'

import piza from '../../assets/images/piza.png'
import deleteIcon from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Carrinho = () => (
  <Cart title="Carrinho">
    <div className="container">
      <ul>
        <li>
          <img src={piza} alt="Pizza" />
          <div className="info">
            <h2>Pizza Marguerita</h2>
            <span>R$ 60.90</span>
          </div>
          <img src={deleteIcon} alt="lixeira-de-reciclagem" />
        </li>
      </ul>

      <ul>
        <li>
          <img src={piza} alt="Pizza" />
          <div className="info">
            <h2>Pizza Marguerita</h2>
            <span>R$ 60.90</span>
          </div>
          <img src={deleteIcon} alt="lixeira-de-reciclagem" />
        </li>
      </ul>

      <ul>
        <li>
          <img src={piza} alt="Pizza" />
          <div className="info">
            <h2>Pizza Marguerita</h2>
            <span>R$ 60.90</span>
          </div>
          <img src={deleteIcon} alt="lixeira-de-reciclagem" />
        </li>
      </ul>

      <div className="preco">
        <p>
          Valor total <span>R$ 182.70</span>
        </p>
      </div>
      <button>continuar com a entrega</button>
    </div>
  </Cart>
)

export default Carrinho
