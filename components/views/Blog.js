function formatBlogPost(post) {
  return `
  <div class="blog-post">
    <h4>${post.title} by User ${post.userId}</h4>
    <p>${post.body}</p>
  </div>`;
}

export default st => `
<section id="blog">
${st.posts
  .map(post => {
    return formatBlogPost(post);
  })
  .join()}

  <!-- ${st.posts.map(post => formatBlogPost(post)).join()} -->
  <!-- ${st.posts.reduce((html, post) => html + formatBlogPost(post), ``)}-->
</section>`;
