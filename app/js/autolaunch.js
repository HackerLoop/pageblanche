var AutoLaunch = require('auto-launch');

var pageblancheAutoLauncher = new AutoLaunch({
	name: 'PageBlanche',
	path: '/Applications/PageBlanche.app',
});

pageblancheAutoLauncher.enable();

//minecraftAutoLauncher.disable();


pageblanchetAutoLauncher.isEnabled()
.then(function(isEnabled){
	if(isEnabled){
	    return;
	}
	pageblancheAutoLauncher.enable();
})
.catch(function(err){
    // handle error
});
