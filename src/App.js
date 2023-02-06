import './App.css';
import Header from "./componets/Header";
import InviteComp from "./componets/InviteComp/InviteComp";

import mainBg from './../src/assets/images/BG Image.jpg'

function App() {
    return (
        <div className="container">
            <div className='mainBg'>
                <Header/>
                <InviteComp/>
            </div>
        </div>
    );
}

export default App;
