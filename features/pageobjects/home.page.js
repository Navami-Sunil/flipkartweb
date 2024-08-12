class home{
    async homepage(){
        await browser.url('https://www.flipkart.com/');
        await browser.maximizeWindow();
    }
}
module.exports=new home();