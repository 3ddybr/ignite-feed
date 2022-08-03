import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [linkCount, setLinkCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLinkCount((state) => {
      return state + 1;
    })

    // setLinkCount(linkCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
        src="https://github.com/3ddybr.png"
        alt="3ddybr"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alberto</strong>
              <time title="11 julho 2022 as 8:01" dateTime='2022-07-29 08:01:30'>Publicado a 1 hora</time>

            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário ">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{linkCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}