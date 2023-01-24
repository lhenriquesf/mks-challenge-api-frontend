import { Container, Products } from './styles';
import { Header } from '../../components/Header';
import { ProductBuy } from '../../components/ProductBuy';

export function Home() {
  return(
    <Container>
      <Header/>

      <Products>
        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>

        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>
      </Products>
    </Container>
  );
};
