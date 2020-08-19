#! /usr/bin/env node

/**
 * 自动化增添组件脚本
 * @author rivertwilight
 */

const path = require('path')
const fileSave = require('file-save')
const fs = require("fs")

const componentName = process.argv[2];
const componentPath = path.resolve(__dirname, '../src/components', componentName);
const testPath = path.resolve(__dirname, '../src/components', componentName, '__test__');

const indexTemplate = `import * as React from 'react'
const ${componentName} = () => {}
export default ${componentName}
`

const testTemplate = `import React from 'react'
import { shallow } from 'enzyme'
import ${componentName} from './${componentName}'
`

const files = [
    {
        fileName: 'index.tsx',
        content: indexTemplate,
        path: componentPath
    }, {
        fileName: `index.test.js`,
        content: testTemplate,
        path: testPath
    }
]

files.forEach(file => {
    fileSave(path.join(file.path, file.fileName))
        .write(file.content.trim(), 'utf8')
        .end('\n')
})

// 添加入口文件
function readDirSync(path, flat) {
    var pa = fs.readdirSync(path);
    var dirs = []
    pa.forEach((ele, index) => {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            dirs.push(ele)
            if (flat) {
                // 包含子目录
                return readDirSync(path + "/" + ele);
            }
        }
    })
    return dirs
}

const exportContent = readDirSync(path.resolve('src/components')).map(ele => `export { default as ${ele} } from './${ele}' \n`).join('')

fileSave(path.join(__dirname, '../src/components', 'index.tsx'))
    .write(exportContent, 'utf8')
    .end('\n')

console.log('done.')
