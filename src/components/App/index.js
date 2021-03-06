import React from 'react'

class App extends React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const host = process.env.HOST
    const resp = await window.fetch(`https://${host}/posts`)
    const posts = await resp.json()
    this.setState({
      posts: posts.filter(Boolean)
    })
  }

  render() {
    const {posts} = this.state

    return (
      <div className="App">
        <h1 className="App-title">My super Blog!</h1>
        {posts.map((post, index) => (
          <div key={index} className="App-post">
            <h2 className="App-titulo">{post.title}</h2>
            <p className="App-description">{post.description}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App
