import { Routes, Route } from 'react-router-dom';
import ReturnHome from './components/return-home/return-home.component';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <>
      <h1>I am the shop 🛒 page</h1>
    </>
  )
}



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* index pattern matches the parent Route  */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
      <Route path="*" element={<ReturnHome />}>
      </Route>
    </Routes>
  );
};

export default App;
