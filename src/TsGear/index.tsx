import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { coordinates } from '../coordinate'
import { LinkOutside } from '../LinkOutside'

import s from './style.module.less'

const style: React.CSSProperties = {
  marginTop: '2em',
}

export const TsGear: React.FC = () => {
  return (
    <div className={`${s.step} step`} {...coordinates.TsGear}>
      <h1 className="title text-center color11">前端实践</h1>
      <h2 className="color8">
        在<b className="color12">Javascript</b>环境，可直接使用官方的
        <b className="fontSize1dot2 color12">swagger-codegen</b>，或者
        <b className="fontSize1dot2 color12">openapi-generator</b>生成<b className="color12">SERVICE</b>层代码。
        生成结果示例:
        <SyntaxHighlighter language="javascript">
          {`
   findPetsByStatus(status, callback) {
      let postBody = null;

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling findPetsByStatus");
      }
      let pathParams = {};
      let queryParams = {
        'status': this.apiClient.buildCollectionParam(status, 'csv')
      };
      let headerParams = {};
      let formParams = {};

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];

      return this.apiClient.callApi(
        '/pet/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
          `}
        </SyntaxHighlighter>
      </h2>
      <h2 className="color8">
        在<b className="color12">Typescript</b>环境，除了官方的工具之外，还有几个推荐的第三方工具
        <ul>
          <li>
            <LinkOutside className="fontSize1dot2" href="https://github.com/cellular/oazapfts">
              oazapfts
            </LinkOutside>
            : 使用typescript抽象语法树生成代码。
          </li>
          <li>
            <LinkOutside className="fontSize1dot2" href="https://github.com/alibaba/pont">
              pont
            </LinkOutside>
            : 阿里的一个工具，自动生成typescript代码。不光有工具，还有vscode插件。
          </li>
          <li className="color8" style={style}>
            <LinkOutside className="color12 doubleFontSize" href="https://github.com/superwf/ts-gear">
              TsGear
            </LinkOutside>
            <p>
              我组项目<b className="color5">自研</b>工具，已经应用在<b className="color14">三</b>个前端系统上。
            </p>
            <p>
              名称解释: 将服务端与客户端两个环境像<b className="color3">齿轮</b>一样对接起来自动运行。
            </p>
            <p>
              主要<b className="color12">解决</b>上述的一些swagger定义不完善的问题，例如:
              <b className="color10">类型丢失、关键字冲突、范型解析</b>
              ，尽最大可能生成可用的 <b className="color6">service</b> 层代码，并生成测试环境
              <b className="color6">mock</b>数据。 示例代码如下:
            </p>
            <p>
              <img alt="tsgear" src="/asset/tsGearService.gif" width="100%" />
            </p>
            <p>
              代码组织方式特点:
              每个请求都是独立函数，可独立引入。生成的请求函数依赖接口定义数量，可能会非常多，但是实际项目中仅用到一小部分。但由于请求之间互相独立，在生产环境发布编译中进行有效的
              <b className="color6">treeshake</b>，减少体积。
            </p>
          </li>
        </ul>
        <p>
          代码生成器工具总体分两大类型: 字符串模板生成与语法树生成。除了查看源码之外，可以从错误发生阶段来判断。
          <ul>
            <li>字符串模板生成: 在生成时兼容性较强，只要最终能拼出字符串即可。但在运行时会报错。例如官方的生成器。</li>
            <li>
              语法树生成:
              因为在最初收集接口定义时即要按目标语言语法规则，因此在生成时就会报错。例如后面的几个非官方生成器。
            </li>
          </ul>
        </p>
      </h2>
    </div>
  )
}
