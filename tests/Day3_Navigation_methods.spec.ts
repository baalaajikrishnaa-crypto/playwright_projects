/*

page.goto()
page.goBack()
page.goForward()
page.reload()

*/

import {test,expect} from '@playwright/test'

test('navigation test1', async ({page})=>{
    
    // goto 
    let response =await page.goto('https://www.amazon.com',{
        timeout:10000,
        waitUntil:'load'
    });

    console.log(response?.status())

    // go back
    await page.goto('https://www.gmail.com',{
        waitUntil:'load',timeout:10000
    })

    await page.goBack({waitUntil:'load',timeout:10000})

    // go forward
    await page.goForward()
    await page.reload()
})