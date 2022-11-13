/*
 * @Author: lzp
 * @Date: 2022-11-08 17:17:51
 * @Description: file content
 */
'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {
  async list() {
    const { ctx, app } = this;

    // 通过 token 解析，拿到 user_id
    const token = ctx.request.header.authorization;
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    if (!decode) return;
    const user_id = decode.id;
    const list = await ctx.service.type.list(user_id);
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: {
        list,
      },
    };
  }
}

module.exports = TypeController;
