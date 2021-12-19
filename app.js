/**
 * @file Test One API
 * @author Ippei Suzuki
 */

'use strict';

// モジュールを読込む。
const
  express = require('express'),
  morgan = require('morgan');

// アプリケーションを作成する。
const app = express();

// ミドルウェアを設定する。
app.use(morgan('combined'));
app.use('/', express.static(__dirname + '/public'));

// ポートをセットする。
const port = 3000;

// URLをセットする。
const url = `localhost:${port}`;

// リクエトを受付ける。
app.listen(port, () => {
  console.log(`server starting on ${url}.`);
});