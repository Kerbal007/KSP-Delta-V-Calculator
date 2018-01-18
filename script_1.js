/*Delta V Calculum*/
/*-----------------------------------------------------------------------------------------*/
/*Parts Info: https://wiki.kerbalspaceprogram.com/wiki/Parts#Engines
exvel equation: http://www.energy.kth.se/compedu/webcompedu/WebHelp/S1_Heat_and_Power_Technology/B8_Spacecraft_Propulsion/C2_Basic_Propulsion_Relations/S1B8C2_files/Effective_exhaust_velocity.htm*/

var deltaV; //delta V
var thrust; //Thrust in Kn THRUST
var flow;	//consumption of fuel per second, normally in kg but in KSP is in Units
var exvel;	//exhaust velocity in m/s MAX FUEL CONSUMPTION
var dry;	//dry weight of rocket 
var prop;	//weight of the propellant

/* 	Ideal Rocket equation: deltaV = exvel*math-log((dry+prop)/dry)
	effective exhaust velocity: exvel = thrust/flow*/
var x = thrust;
var y = flow;
var z = dry;
var w = prop;


function delta(x,y,z,w){
	var v = x/y;
	var D = v * math.log((z+w)/z);
}
/*-----------------------------------------------------------------------------------------*/

/*List of Parts*/
/*-----------------------------------------------------------------------------------------*/

var engines = { //I'm creating an multidimensional array of all engines
				//REMINDER: Try to link the image of the engine to the value on the array with CSS and HTML
	
	liquid:{
		
	},
	
	jet:{
		
	},
	
	solid:{
		
	},
	
	ion:{
		
	},
};

var parts= {
	
	tanks:{
		
	},
	
	pods:{
		
	},
	
	control:{
		
	},
	
	structure:{
		
	},
	
	Coupling:{
		
	},
	
	payload:{
		
	},
	
	Aero:{
		
	},
	
	Land:{
		
	},
	
	Thermal:{
		
	},
	
	Electric:{
		
	},
	
	Comm:{
		
	},
	
	Utility:{
		
	},
	
	Science:{
		
	}
}


/*-----------------------------------------------------------------------------------------*/