/**
 * 更改主题，teaset提供了设置主题和切换主题的能力，但有些时候，有一些颜色需要再手动调整，所以创建了这个文件，通过在里面配置颜色，并在项目的入口中引入，就可以直接使用Theme.backgroundColor的方式调用颜色了。
 */

import { Theme } from 'teaset';

Theme.set({

  backgroundColor: 'white',
  transparentColor: 'transparent',
});
