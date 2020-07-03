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
    'data-z': '-5000',
    'data-rotate': '0',
  },
  {
    id: 'OpenApi',
    'data-x': '-4000',
    'data-y': '-300',
    'data-z': '-4000',
    'data-rotate': '0',
  },
  {
    id: 'Swagger',
    'data-x': '-3000',
    'data-y': '-200',
    'data-z': '-3000',
    'data-rotate': '0',
  },
  {
    id: 'SwaggerGenerator',
    'data-x': '-2000',
    'data-y': '0',
    'data-z': '-2000',
    'data-rotate': '0',
  },
  {
    id: 'SwaggerGeneratorIssue',
    'data-x': '-3000',
    'data-y': '0',
    'data-z': '-2000',
    'data-rotate-y': '-180',
  },
  {
    id: 'TsGear',
    'data-x': '3000',
    'data-y': '0',
    'data-z': '0',
    'data-rotate': '60',
    'data-scale': '10',
  },
  {
    id: 'end',
    'data-x': '3000',
    'data-y': '0',
    'data-z': '1000',
    'data-rotate': '60',
    'data-scale': '10',
  },
]

export const coordinates = zipObject(map(coords, property('id')), values(coords))
