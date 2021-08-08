import p from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}
const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={p.item}>
      <div>
        <img src="https://image.flaticon.com/icons/png/512/168/168724.png" alt="" />
        {props.message}
      </div>
      <div>
        Like {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
