/*

Informaitonal methods

page.title()

*/

import {test,expect} from '@playwright/test'

test('navigation test1', async ({page,browser})=>{
    
    // goto 
    await page.goto('https://www.amazon.com')

    let pageTitle =  await page.title()
    console.log('Page title is: ',pageTitle)
    //expect(pageTitle).toContain("Amazon.com")


    // page.url
    let pageUrl:string = page.url()
    console.log('Current page url is :', pageUrl)

    // page.content
    console.log(await page.content())

    let viewPortSize = page.viewportSize();
    console.log(viewPortSize)
    
    // page.isClosed
    console.log(page.isClosed())
    await page.close()
    console.log(page.isClosed())

    // browser methods

    // support methods

})