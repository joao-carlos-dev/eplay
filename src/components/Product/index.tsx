import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem iDescricaosum, dolor sit amet consectetur adipisicing elit. Itaque
      ipsa amet quis ullam recusandae iusto! Earum, amet et? Ipsa vel possimus
      rerum! FaciliDes placeat culpa obcaecati reiciendis iure, in accusantium!
    </Descricao>
  </Card>
)

export default Product
