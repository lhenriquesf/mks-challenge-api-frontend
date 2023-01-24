import { Container } from "./styles";
import cartImg from "../../assets/cart.svg";

export function Header(){
    return(
        <Container>
            <div className="items_header">
                <div className="title_header">
                    <h1>MKS</h1>
                    <h3>Sistemas</h3>
                </div>

                <button> <img src={cartImg} alt="Cart Buy" />
                    0
                </button>
            </div>
        </Container>
    );
}