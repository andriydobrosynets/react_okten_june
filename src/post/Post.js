export default function Post({item:postItem}) {
    return (
        <div>
            <p>{postItem.userId} - {postItem.id} - {postItem.title}</p>
        </div>
    );
}