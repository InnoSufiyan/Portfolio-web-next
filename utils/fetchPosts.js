export const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/api/getPosts')

    const data = await res.json();

    const posts = data.posts;

    return posts
}