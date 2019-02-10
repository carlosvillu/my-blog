/* global React e html */

const Footer = React.lazy(() => import('../Footer/index.js'))

export default class App extends window.React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const host = 'us-central1-my-blog-8c83e.cloudfunctions.net'
    const resp = await window.fetch(`https://${host}/posts`)
    const posts = await resp.json()
    this.setState({
      posts: posts.filter(Boolean)
    })
  }

  render() {
    const {posts} = this.state

    return html`
      <div class="App">
        <h1 class="App-title">My super Blog!!!!</h1>
        ${posts.map(
          (post, index) => html`
            <div class="App-post" key=${index}>
              <h2 class="App-titulo">${post.title}</h2>
              <p class="App-description">${post.description}</p>
            </div>
          `
        )}
        <${React.Suspense} fallback=${html`<p>Loading</p>`}>
          <${Footer} />
        </${React.Suspense}>
      </div>
    `

    // return e(
    //   'div',
    //   {className: 'App'},
    //   e('h1', {className: 'App-title'}, 'My superBlog!!!!'),
    //   posts.map((post, index) =>
    //     e(
    //       'div',
    //       {key: post.id, className: 'App-post', key: index},
    //       e('h2', {className: 'App-titulo'}, post.title),
    //       e('p', {className: 'App-description'}, post.description)
    //     )
    //   ),
    //   Footer && e(Footer)
    // )
  }
}
