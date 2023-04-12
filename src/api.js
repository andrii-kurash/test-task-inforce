const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts() {
  const response = await fetch(`${API_URL}/posts?_limit=10`);
  const posts = await response.json();
  return posts;
}
