import styles from "./OneProduct.module.css";
import { Form, Button, Card, Container } from "react-bootstrap";

const OneProduct = (props) => {
  console.log(props.items.products);
  const product = props.items.products;
  return (
    <div className={styles.list}>
      {Array.isArray(product) &&
        product.map((item) => {
          return (
            <Card key={item.id} className={styles.oneProduct}>
              <h5>{item.title}</h5>
              <h5>{item.description}</h5>
              <h5>{item.price}</h5>
              <h5>{item.brand}</h5>
              <h5>{item.category}</h5>
              <img className={styles.img} src={item.images[0]} alt="" />
            </Card>
          );
        })}
    </div>
  );
};

export default OneProduct;
