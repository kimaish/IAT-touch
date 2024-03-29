define(['pipAPI', 'https://cdn.jsdelivr.net/gh/kimaish/IAT-touch@main/touchtrue.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Imperial Blue', //Will appear in the data.
			title : {
				media : {word : 'Imperial Blue'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {image: 'IB1.png'},
				{image: 'IB2.jpg'},
				{image: 'IB3.jpg'},
				{image: 'IB4.jpg'},
				{image: 'IB5.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'McDowell's', //Will appear in the data.
			title : {
				media : {word : 'McDowell's'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{image: 'McD1.jpg'},
				{image: 'McD2.jpg'},
				{image: 'McD3.jpg'},
				{image: 'McD4.jpg'},
				{image: 'McD5.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Good Choice',
			title : {
				media : {word : 'Good Choice'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'stylish'},
				{word: 'youthful'},
				{word: 'premium'},
				{word: 'classic'},
				{word: 'friend's party'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Bad Choice',
			title : {
				media : {word : 'Bad Choice'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'boring'},
				{word: 'dull'},
				{word: 'standard'},
				{word: 'ordinary'},
				{word: 'drinking alone'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/kimaish/IAT-touch/tree/main/imagesjpg/'
		} 
	});
});
