import { map, zipObject, property, values } from 'lodash'

/** 统一配置所有页面的坐标等变形参数 */
const coords = [
  {
    id: 'qrcode',
    'data-x': '-4000',
    'data-y': '-3000',
    'data-z': '-200',
    'data-scale': '2',
  },
  {
    id: 'title',
    'data-x': '-4000',
    'data-y': '-2000',
    'data-z': '-400',
    'data-scale': '4',
  },
  {
    id: 'preface',
    'data-x': '-5000',
    'data-y': '300',
    'data-z': '-500',
  },
  {
    id: 'JSONSchema',
    'data-x': '-6000',
    'data-y': '2000',
    'data-z': '-1500',
    'data-rotate-y': '10',
  },
  {
    id: 'OpenApi',
    'data-x': '-4800',
    'data-y': '1500',
    'data-z': '-2000',
    'data-rotate-y': '20',
  },
  {
    id: 'Swagger',
    'data-x': '-3600',
    'data-y': '2200',
    'data-z': '-2500',
    'data-rotate-y': '10',
  },
  {
    id: 'SwaggerGenerator',
    'data-x': '-2000',
    'data-y': '2300',
    'data-z': '-3000',
  },
  {
    id: 'SwaggerGeneratorIssue',
    'data-x': '3000',
    'data-y': '1000',
    'data-z': '-1500',
    'data-rotate-x': '-720',
  },
  {
    id: 'TsGear',
    'data-x': '2000',
    'data-y': '-1000',
    'data-z': '3000',
    'data-scale': '1',
  },
  {
    id: 'overview',
    'data-x': '0',
    'data-y': '0',
    'data-z': '0',
    'data-rotate': '0',
    'data-scale': '7',
  },
]

export const coordinates = zipObject(map(coords, property('id')), values(coords))
