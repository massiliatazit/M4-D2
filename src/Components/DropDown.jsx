import React from 'react';
import {Dropdown, Row,Container,Card} from 'react-bootstrap'
import FantasyBooks from '../data/Fantasy.json';
import RomanceBooks from '../data/Romance.json';
import HorrorBooks from '../data/Horror.json';
import HistoryBooks from '../data/History.json';


 class DropDown extends  React.Component{
    state={
       genre: RomanceBooks,
    }

render(){ 
    console.log(this.state.genre[0])
    
    return(
    <div>
        <Row>
            <Container>
        <Dropdown>
<Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'#135144'}}>
Category
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item href="#" onClick={()=>this.setState({genre:RomanceBooks})}>Romance</Dropdown.Item>
<Dropdown.Item href="#" onClick={()=>this.setState({genre:FantasyBooks})}>Fantasy</Dropdown.Item>
<Dropdown.Item href="# "onClick={()=>this.setState({genre:HorrorBooks})}>Horror</Dropdown.Item>
<Dropdown.Item href="#"onClick={()=>this.setState({genre:HistoryBooks})}> History</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</Container>
</Row>
<Row className="justify-content-between text-center">
        {this.state.genre.map((item) => (
          <Card   border="dark" className="m-3" style={{ width: "18rem" }} key={item.asin} >
            <Card.Img variant="top" height={200} src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="d-flex justify-content-between">
                <span>{item.category}</span>
                <span>{item.price}zł</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
)}
  
}

export default  DropDown;