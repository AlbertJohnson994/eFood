import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#eeea',
  verde: '#10AC84',
  cinzaClaro: '#3C524F',
  corFundo: '##FFEBD9',
  textColor: '#E66767',
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
    background-color: ${cores.corFundo};
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
