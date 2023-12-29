import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Nav from "./components/Nav";
import VotingCard from "./components/VotingCard";
import Footer from "./components/Footer";
import Home from './Home';
import MyElection from './MyElection';
import ExploreVote from './ExploreVote';
import Details from './Details';
function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/myelection', element:<MyElection/>},
    {path:'/explore-vote', element:<ExploreVote/>},
    {path:'/details', element:<Details/>}
  ])
  return (
    <>
  
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
