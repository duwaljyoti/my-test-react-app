import './App.css';
import Todo from "./components/Todo";
import {Route, Routes} from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layouts/MainNavigation";
import Layout from "./components/layouts/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllMeetUpsPage />}>
                </Route>

                <Route path='/new-meetup' element={<NewMeetUpPage />}>
                </Route>

                <Route path='/favourites' element={<FavouritesPage />}>
                </Route>
            </Routes>
        </Layout>
    )

  // return (
  //     <div>
  //       {/*My Todos*/}
  //       {/*  <Todo text='first course' />*/}
  //       {/*  <Todo text='second course' />*/}
  //       {/*  <Todo text='third course' />*/}
  //
  //         {/*<Modal />*/}
  //         {/*<Backdrop />*/}
  //
  //         <MainNavigation />
  //
  //         <Routes>
  //             <Route path='/' element={<AllMeetUpsPage />}>
  //             </Route>
  //
  //             <Route path='/new-meetup' element={<NewMeetUpPage />}>
  //             </Route>
  //
  //             <Route path='/favourites' element={<FavouritesPage />}>
  //             </Route>
  //         </Routes>
  //     </div>
  // )
}

export default App;
