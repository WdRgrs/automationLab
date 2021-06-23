import { Builder, Capabilities, By } from "selenium-webdriver"
const chromedriver = require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
//END OF BOILERPLATE

//Navigate to movies from our HTML file - locally hosted
beforeAll(async () => {
    // await driver.get('http://127.0.0.1:5500/movieList/index.html')
    // await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
    await driver.get('http://127.0.0.1:5500/index.html')
})

//Function used to clear browser once test is completed
afterAll(async () => {  
    await driver.quit();
})

test('Adding a movie', async () => {

    let movieBar = await driver.findElement(By.name('Add Movie'))

    //Jade smells movie, with mouse click instead of new line \n
    await driver.sleep(2000);

    await movieBar.sendKeys('Jade smells funky...')

    await driver.sleep(2000);

    await driver.findElement(By.name('Button')).click();
    
    // NEW MOVIE - Arash
    await driver.sleep(2000);

    await movieBar.sendKeys('Arash is the man\n')
    
    await driver.sleep(2000);

    //NEW MOVIE - JK / strikethrough old movie
    
    await movieBar.sendKeys('Jk Jade is a cool guy\n')
    
    await driver.sleep(2000);
     
    await driver.findElement(By.xpath('//span[contains(text(),"Jade smells funky...")]')).click()
    
    await driver.sleep(2000);

    //DELETE Arash movie by clicking 'x' button

    await driver.findElement(By.id('Arashistheman')).click();
    
    await driver.sleep(10000);
    
    // await movieBar.clear();

})