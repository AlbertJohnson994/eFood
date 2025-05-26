import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#eeea',
  cinzaClaro: '#3C524F',
  primary: '#FFEBD9',
  secundary: '#E66767',
  starColor: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.primary};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
}


main {
  flex: 1;
}
`
