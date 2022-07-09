import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>LiveChat</title>
        <meta name="description" content="LiveChat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.contactsContainer}>
        <div className={styles.contactsSearch}>
          <input placeholder='Search'></input>
        </div>

        <div className={styles.contactsContainer}>
          <div className={styles.contactsUnit}>
            <img src='https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' alt='perfil'/>
            <div>
              <h2>Gonza Espindola</h2>
              <p>Last message</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.messageContainer}>
        <div className={styles.messageInfo}>
          <img src='https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' alt='perfil'/>
          <div>
            <h2>Gonza Espindola</h2>
            <p>Who is typing..</p>
          </div>
        </div>

        <div className={styles.messageChats}>
          <div className={styles.messageChatsUnit}>
            <div className={styles.messageChatsUnitContain}>
              <p>Mensage uno</p>
            </div>

            <div className={styles.messageChatsUnitContain}>
              <p>Mensage 2</p>
            </div>

            <div className={`${styles.messageChatsUnitContain} ${styles.self}`}>
              <p>Mensage uno propio</p>
            </div>
          </div>
          <div className={styles.messageControls}>
            <input type='text' placeholder='Type your message...'/>
            <button>Sent</button>
          </div>
        </div>
      </section>
    </div>
  )
}
