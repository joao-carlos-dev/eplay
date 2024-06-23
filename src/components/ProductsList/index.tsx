import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
