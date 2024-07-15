module.exports = EventsHandler = async (event, client) => {
    const activateEvents = (await client.DB.get('events')) || [];
    const groupMetadata = await client.groupMetadata(event.id);
    if (!activateEvents.includes(event.id)) return;

    const getRandomMessage = (action, participants) => {
        const randomMessages = {
            add: [
                '{user} here is a warm welcome to our support group glad you decided to join us im killer frost❄️ a whatsapp bot created by my crush Manexx☺️👌!',
                '{user} welcome to our group designed to share helpful stuff Im killer frost a bot created bt my crush Manexx😚 !',
                '{user} hey there welcome im killer frost and you are....!',
                '{user} has arrived hey sweetie!',
                'Welcome to the group, {user}. Hope you follow the description rules im killer frost❄️ a bot created by my crush manexx🤭🥂.',
                "{user} has arrived. we are proud to have you in our group im killer frost a bot created by my crush manexx☺️!",
                '{user} we are pleased that you considered our group link lets have a drink🥂!',
                "Well, {user}, it's about time you arrived hope you like a toast🥂!",
                'Um, {user} has arrived. and we expect unconditional love from you Im killer frost a bot created by my crush manexx and you are....!?',
                'Very funny {user}, I expected you to be here a while what took you so long😔?',
                'Good to see you, {user}. just know you are welcome😜 Im killer a WhatsApp bot manexxs crush and you are..🤭 ',
                "It's a pleasure to see you {user} as for me i love my crush manexx if i may ask who do you love❤️.",
            ],
            remove: [
                '{user} has left the party.',
                '{user} has left the group.',
                '{user} has left the group. I hope you enjoyed your stay.',
                "Well {user}, it's about time you left.",
                'Bye bye {user}.',
                "It's been nice meeting you {user}.",
                'Take care {user}.',
                'Later {user}.',
                'Catch you later {user}.',
                'Till next time {user}.',
                'We will meet again {user}.',
            ],
            demote: [
                "{user}, you're fired from the admin position!",
                "lol Adminship isn't for you {user}. maybe next time",
                "{user} you had a good run, but you're no longer an admin.",
                "Well, I don't know how to tell you this, but {user} you have been demoted in admin community.",
                '{user} has been demoted. I hope you enjoyed your admin run.',
            ],
            promote: [
                "{user}, you're now an admin. hope you take good care of us!",
                "Welcome {user}, you're now an admin. lets have a cold beer!",
                "Well, you're an admin now {user}. happy now ??",
                "Looks like you're an admin now {user}.",
            ],
        };

        const messages = randomMessages[action] || [];
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex].replace('{user}', `@${participants[0].split('@')[0]}`) || '';
    };

    const text = getRandomMessage(event.action, event.participants);

    client.sendMessage(event.id, {
        text,
        mentions: event.participants,
    });
};
                
