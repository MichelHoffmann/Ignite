import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Michel Hoffmann"
            content="kwrgkeqg rwehwrjhwr egiouwhe oliuhwg ouih rhgwogih holih rhoh oiwh oiuh o oiuhg ouij ioh  ihoh"
          />

          <Post
            author="Lorrana Rodrigues"
            content="kwrgkeqg rwehwrjhwr egiouwhe oliuhwg ouih rhgwogih holih rhoh oiwh oiuh o oiuhg ouij ioh  ihoh"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
