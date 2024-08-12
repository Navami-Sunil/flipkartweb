class furniture{
    async furnitureselect(){
        await $('//span[text()="Furniture"]').click();
        await $('//a[text()="VIEW ALL"]').click();

        await $('//div[text()="Office Study table"]').click();
        await $("//div[text()='Table Top Material']").click();
        await $("//div[text()='Glass']").click();
        await $("//a[@title='CATIVE Engineered Wood Office Table']").click();
        await browser.pause(3000);
    }
}
module.exports=new furniture();