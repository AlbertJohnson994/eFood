import styled from 'styled-components'

interface LocalProductListProps {
  columns: number
  background: string
}

export const ProductListContainer = styled.section<LocalProductListProps>`
  padding: 16px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: center;
    display: flex;

    .nota {
      justify-content: space-between;
    }
  }
`

export const List = styled.div<LocalProductListProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 38px;
  padding: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
