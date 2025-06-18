// src/App.js
import './App.css';
import Header from './components/Header';
import Animation from './components/Animation'; // 새로 추가
import Message from './components/Message';
import Gallery from './components/Gallery';
import Location from './components/Location'; // 추가
import Contact from './components/Contact';   // 추가
import Gift from './components/Gift';       // 추가
import Rsvp from './components/Rsvp'; // 추가
import Guestbook from './components/Guestbook';

function App() {
  return (
    <div className="App">
      <Header />
      <Animation /> {/* 헤더 바로 아래에 배치 */}
      <Message />
      <Gallery />
      <Location />
      <Rsvp /> {/* 방명록 앞에 추가 */}
      <Contact />
      <Gift />
      <Guestbook />
      {/* <Gallery /> */}
    </div>
  );
}

export default App;