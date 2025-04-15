import styled from 'styled-components'
import { cores } from '../../styles'

import { TagProps } from './index'

export const TagContainer = styled.div<TagProps>`
  background-color: ${cores.textColor};
  color: ${cores.branca};
  padding: ${(props) => (props.size === 'large' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  font-weight: bold;
  font-size: ${(props) => (props.size === 'large' ? '16px' : '10px')};
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.3s;
`
