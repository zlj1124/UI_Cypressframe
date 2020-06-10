<!--
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-27 15:53:53
 -->
# UI_Cypressframe

基于Cypress+Page Object模式的demo
## 运行项目

1. Clone this repo 
2. npm install
3. npm install cypress
4. npm install cypress-file-upload
5. npm install -D cypress-xpath
6. pip install PyMySQL==0.9.3
7. pip3 install argparse
8. npm run cypress:open

## 目录结构

```.bash
├── action
│   ├── pageActions =>行为方法封装
│   │   ├── loginPage.js
│   │   ├── monitorPage.js
│   │   └── vehiclePage.js
│   ├── pageLocators =>定位信息
│   │   ├── loginPageLocators.js
│   │   ├── monitorPageLocators.js
│   │   └── vehiclePageLocators.js
│   └── testData =>测试数据
│       └── data.json
├── cypress
│   ├── fixtures
│   │   ├── example.json
│   │   └── truck.xlsx
│   ├── integration =>测试用例
│   │   ├── monitor.js
│   │   └── vehicle_manager.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── package-lock.json
├── package.json
```
