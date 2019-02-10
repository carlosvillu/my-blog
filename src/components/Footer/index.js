/* global React e html */

export default class Footer extends React.Component {
  render() {
    return html`<footer class="Footer">Esto es un footer y se carga despues de mostrar la App</footer>`
    // return e(
    //   'footer',
    //   {className: 'Footer'},
    //   'Esto es un footer y se carga despues de mostrar la App'
    // )
  }
}
