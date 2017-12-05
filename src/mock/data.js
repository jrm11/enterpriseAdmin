/**
 * Created by Administrator on 2017/12/5.
 */
import Mock from 'mockjs'

// 训练营
const data = [];
for (var i = 0; i < 8; i++) {
  data.push(Mock.mock('/data',{
    img: Mock.mock('@color()'),
    name: Random.word(3, 10),
    subName: Random.word(3, 8),
    num: Mock.mock({
      "number|1-20": 20
    }),
    price:Mock.mock({
      "number|1-100": 10000
    }),
  }));
}
