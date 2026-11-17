import {test,expect,chromium,firefox,webkit} from '@playwright/test'

test('launching chromium binary', async ()=>{

    console.log('this is first program')

    let browser = await chromium.launch({
        headless:false,
        channel:'msedge'
    })
/*
browser context - sessions
*/

let context1 = await browser.newContext();
let context2 = await browser.newContext();

let page1 = await context1.newPage();
let page2 = await context2.newPage();

await page1.goto('https://www.amazon.com')
await page2.goto('https://www.gmail.com')


})