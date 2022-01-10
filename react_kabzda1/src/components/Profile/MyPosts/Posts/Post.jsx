import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.item}>
                    <img src="https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg"
                         alt="avatar"/>
                    {props.massage}
                    <div>
                        <span>like {props.lice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;