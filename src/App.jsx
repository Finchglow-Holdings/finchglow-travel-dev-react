
import Homepage from './components/hompage';
import './App.css';
import ZohoChat from './components/zohoChat';
import OneSignal from './components/API/oneSignal';


function App() {
 

  return (
    <div>
      <OneSignal/>
      <ZohoChat />
      <Homepage />
    </div>
  );
}

export default App;
