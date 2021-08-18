export default function Comment({item:commentItem}) {
    return (
        <div>
            {
                <p>{commentItem.postId} - {commentItem.id} - {commentItem.body}</p>
            }
        </div>
    );
}

