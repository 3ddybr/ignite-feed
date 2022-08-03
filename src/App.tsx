import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/3ddybr.png',
      name: 'Lucas Fortunato',
      role: 'System Analyst '
    },
    publishedAt: new Date('2022-06-22 02:05:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉', },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    publishedAt: new Date('2022-05-10 02:37:00'),
    content: [
      { type: 'paragraph', content: 'Eai pessoal!', },
      { type: 'paragraph', content: 'Gostaria de dizer que fico muito contente com o esforço e desempenho de vocês na trilha Ignite! Vambora!', },
      { type: 'link', content: 'https://rocketseat.com.br' },
      { type: 'link', content: '#neverstoplearning' },
    ]
  },
  // add more posts here
]

export function App() {
  return (
    <>
      {console.log(Date())}
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={[]}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

