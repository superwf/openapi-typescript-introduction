import { map, zipObject, property, values } from 'lodash'

/** 统一配置所有页面的坐标等变形参数 */
export const coords = [
  {
    id: 'preface',
    'data-x': '0',
    'data-y': '10000',
    'data-z': '-1000',
    'data-rotate': '0',
  },
  {
    id: 'JSONSchema',
    'data-x': '-5000',
    'data-y': '-400',
    'data-z': '-400',
    'data-rotate': '0',
  },
  {
    id: 'OpenApi',
    'data-x': '-4500',
    'data-y': '-300',
    'data-z': '-300',
    'data-rotate': '0',
  },
  {
    id: 'Swagger',
    'data-x': '-4000',
    'data-y': '-200',
    'data-z': '-200',
    'data-rotate': '0',
  },
]

export const coordinates = zipObject(map(coords, property('id')), values(coords))
