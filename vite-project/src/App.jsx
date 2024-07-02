import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="container ">
      <Header></Header>
      <div className="d-flex">
      <Navigation></Navigation>
      <MainContent></MainContent>
      </div>
    </div>
  );
}
                
export default App;              



