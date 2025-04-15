import styled from 'styled-components'

export const ProductListContainer = styled.section`
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

export const List = styled.div<{ isProfile?: boolean }>`
  display: grid;
  grid-template-columns: ${({ isProfile }) =>
    isProfile
      ? 'repeat(3, 1fr)'
      : 'repeat(2, 1fr)'}; // 3 cols for profile, 2 for home
  gap: 16px;
  padding: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
