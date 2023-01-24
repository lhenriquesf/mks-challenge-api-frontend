import { Container } from "./styles";
import shopping from '../../assets/shopping.svg';
import appleWatch from "../../assets/apple-watch.svg"

export function ProductBuy(){
    return(
        <Container>
            <img src={appleWatch} alt="Imagem do produto Apple Watch" />

            <div className="desc_price">
                <h2>Apple Watch Series 4 GPS</h2> <span>R$399</span>
            </div>
            <p>Redesigned from scratch and completely revised.</p>

            <button> <img src={shopping} alt='Button to buy' />
                COMPRAR
            </button>
        </Container>
    );
}