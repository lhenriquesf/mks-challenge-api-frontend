import { Container } from './styles';
import { Header } from '../../components/Header';
import { ProductBuy } from '../../components/ProductBuy';

export function Home() {
  return(
    <Container>
      <Header/>

      <div className='grid'>
        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>

        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>
        <ProductBuy/>
      </div>

    </Container>
  );
};
