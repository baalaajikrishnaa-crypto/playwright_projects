import {test,expect} from '@playwright/test'

test('launching different browsers/binaries using fixture', async ({page})=>{
    
    await page.goto('https://www.amazon.com')
    await page.goto('https://www.google.com')

})