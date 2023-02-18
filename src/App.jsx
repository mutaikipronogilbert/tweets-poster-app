import MainHeader from "./components/MainHeader";
import PostList from "./components/PostsList";
import { useState } from "react";

function App() {
  const [modaIsVisible, SetModalIsVisible] = useState(false);

  function hideModalHandler() {
    SetModalIsVisible(false);
  }

  function showModalHandler() {
    SetModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modaIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
