// Load up the discord.js library
const Discord = require("discord.js");

const { calculateFee } = require('./feeCalc');

// deconstruct our .env vars
const { TOKEN, PREFIX } = process.env;

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(!message.content.startsWith(PREFIX)) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(PREFIX).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    // Let's go with a few common example commands! Feel free to delete or change those.
    if(command === "fee") {

        // boundary check here for wrong number of args
        if (args.length !== 2) {
            // you can send an error message back if you want..
            return;
        }

        const [, rawAmount] = args;

        const amount = parseFloat(rawAmount);
        
        // check to see if it's a valid number...
        if (!amount || amount === NaN) {
            return;
        }

        const {         
            stockxFees,
            goatFees,
            ebayFees,
            paypalFees,
            grailedFees,
        } = calculateFee(amount);


        // build your embed here...
    }

    if (command === 'tallas') {
        
        // boundary check here for wrong number of args
        if (args.length !== 2) {
            // you can send an error message back if you want..
            return;
        }

        // TODO:
        /**
         * 1. parse out shoe size (could be invalid!)
         * 2. call the shoe size converter in './sizeCalc.js'
         * 3. build embed to return the conversion
         */
    }
});
  
client.login(TOKEN);
