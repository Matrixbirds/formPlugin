formPlugin based on jQuery and json2.
====================================

Simple form submit plugin based on jQuery 1.8.x && json2.js<br/>
Support Firefox, Chrome, IE 8 && high version of IE<br/>
This plugin build under utf-8 encoding environment<br/>
You must make sure your web page is using uft-8 encoding.<br/>

基于jQuery 1.8.x && json2.js 的表单提交插件<br/>
支持chrome firefox ie8及以上版本<br/>
插件在utf-8编码环境下构建<br/>
需要utf-8编码环境的页面才能正常使用<br/>


[Details]<br/>
	lib: formplugin and dependencies<br/>
[Running Demo]<br/>
```bash
	$ npm install
	$ node app.js
```
[How to Use]<br/>
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