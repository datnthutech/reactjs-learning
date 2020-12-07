import logo from './logo.svg';
import './App.css';
import Header from './features/Headers'
import NavBar from './features/NavBar'
import TodoDashboard from './features/TodoDashboard'
import Footer from './features/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <div className="App" style={{margin: '20px'}}>
      <Container className="themed-container" fluid={true}>
        {/*<Row>
          <Header/>
        </Row>
        <Row>
          <NavBar/>
        </Row>*/}
        <Row>
          <TodoDashboard/>
        </Row>
        {/*<Row>
          <Footer/>
        </Row>*/}
      </Container>
    </div>
  );
}

export default App;
