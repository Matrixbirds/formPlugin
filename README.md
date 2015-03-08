formPlugin based on jQuery and json2.
================

Simple form submit plugin based on jQuery 1.8.x && json2.js
Support Firefox, Chrome, IE 8 && high version of IE
This plugin build under utf-8 encoding environment
You must make sure your web page is using uft-8 encoding.

基于jQuery 1.8.x && json2.js 的表单提交插件
支持chrome firefox ie8及以上版本
插件在utf-8编码环境下构建
需要utf-8编码环境的页面才能正常使用


## [Details]
	lib: formplugin and dependencies

## [Running Demo]
	$ npm install
	$ node app.js

## [How to Use]
	step 1. reference all denpendencies

    ```js
	<script type="text/javascript" src="./lib/json2.js"></script>
    <script type="text/javascript" src="./lib/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="./lib/formPlugin.js"></script>
    ```

    step 2. write html code as below

    ```html
    <!-- recommand use post to send form data -->
    <form action="demo" method="post" id="id">
        <table id="tbl">
            <tr>
                <th>username</th>
                <td><input type="text" name="username" value="<%= username%>" /></td>
            </tr>
        </table>
        <div id="tbl2">
            <input type="text" name="form" /><br/>
        </div>
        <input type="submit" id="submit" value="提交"/>
    </form>
    ```

    step 3. use plugins module in javascript

    ```html
    <script type="text/javascript">
        $(function() {
            $("#submit").on('click', function() {
                $("#id").jsonSubmit({
                    domains: ['tbl', 'tbl2']
                })
            });
        })
    </script>
    ```
[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

```bash
$ npm install express
```

## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

## Docs & Community

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/strongloop/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [Github Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/strongloop/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Русскоязычная документация](http://jsman.ru/express/)
  * [한국어 문서](http://expressjs.kr) - [[website repo](https://github.com/Hanul/expressjs.kr)]

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/strongloop/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/strongloop/express/wiki/New-features-in-4.x).

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```bash
$ npm install -g express-generator@4
```

  Create the app:

```bash
$ express /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, web sites, hybrids, or public
  HTTP APIs.

  Express does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](https://github.com/tj/consolidate.js),
  you can quickly craft your perfect framework.

## Examples

  To view the examples, clone the Express repo and install the dependancies:

```bash
$ git clone git://github.com/strongloop/express.git --depth 1
$ cd express
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/content-negotiation
```

## Tests

  To run the test suite, first install the dependancies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People

The original author of Express is [TJ Holowaychuk](https://github.com/tj) [![TJ's Gratipay][gratipay-image-visionmedia]][gratipay-url-visionmedia]

The current lead maintainer is [Douglas Christopher Wilson](https://github.com/dougwilson) [![Doug's Gratipay][gratipay-image-dougwilson]][gratipay-url-dougwilson]

[List of all contributors](https://github.com/strongloop/express/graphs/contributors)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmjs.org/package/express
[travis-image]: https://img.shields.io/travis/strongloop/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/strongloop/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/strongloop/express/master.svg
[coveralls-url]: https://coveralls.io/r/strongloop/express?branch=master
[gratipay-image-visionmedia]: https://img.shields.io/gratipay/visionmedia.svg
[gratipay-url-visionmedia]: https://gratipay.com/visionmedia/
[gratipay-image-dougwilson]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url-dougwilson]: https://gratipay.com/dougwilson/