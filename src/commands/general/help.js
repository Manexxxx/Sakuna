const now = new Date();
const hour = now.getHours();
let greeting;
if (hour >= 0 && hour < 12) {
    greeting = "💕 Good Morning"; // Good morning
} else if (hour >= 12 && hour < 18) {
    greeting = "💕 Good Afternoon"; // Good afternoon baib🤭
} else {
    greeting = "💕 Good Evening"; // Good evening hunny🤫❤️
}

module.exports = {
    name: 'help',
    aliases: ['h', 'menu', 'list'],
    category: 'general',
    react: "♥️",
    description: 'Displays the command list or specific command info',
    async execute(client, arg, M) {
        try {
            if (!arg) {
                let pushName = M.pushName.trim();

                if (pushName.split(' ').length === 1) {
                    pushName = `${pushName}`;
                }

                const categories = client.cmd.reduce((obj, cmd) => {
                    if (cmd.category) { // Only include commands with a category
                        const category = cmd.category;
                        obj[category] = obj[category] || [];
                        obj[category].push(cmd.name);
                    }
                    return obj;
                }, {});

                const emojis = ['❤️', '🥂', '🥰', '🤭', '☺️', '😚', '🥰', '😍', '😋', '😜', '🤪', '😉', '😚'];

                const commandList = Object.keys(categories);

                let commands = '';

                for (const category of commandList) {
                    commands += `*━━━❰ ${client.utils.capitalize(
                        category,
                        true
                    )}* ${emojis[commandList.indexOf(category)]}❱━━━  \n\`\`\`➪${categories[category].map((cmd) =>
                        `${cmd}`).join(', ')}\`\`\`\n\n`;
                }

    let message =`╭────────────────
┣ *Name: Killer Frost❄️*
┣ *User: ${pushName}*
┣ *Prefix : << ${client.prefix} >>*
┣ *Owner: Manexx*
╰────────────────\n\nThis help menu is designed to help you get started with the bot.\n\n⟾ *📪Command List📪*\n\n${commands}\n📚Notes: *➪Use ${client.prefix}help <command_name> for more info of a specific command.*\n*➪Example: ${client.prefix}help bank.*`;
       
                const imageUrls = [
                    'https://telegra.ph/file/d64030b82e94d9082229d.jpg',
                    'https://telegra.ph/file/b4208af383e195cccdf15.jpg',
                    'https://telegra.ph/file/de38fa35fef966ba0edb5.jpg',
                    'https://telegra.ph/file/4e582dfee9a0822569ed4.jpg',
                    'https://telegra.ph/file/0c58fa362d3adb78a6b07.jpg',
                ];

                const getRandomImageUrl = () => {
                    const randomIndex = Math.floor(Math.random() * imageUrls.length);
                    return imageUrls[randomIndex];
                };

                const imageUrl = getRandomImageUrl();
                const thumbnailBuffer = await client.utils.getBuffer(imageUrl);

                await client.sendMessage(
                    M.from,
                    {
                        image: { url: imageUrl, mimetype: 'image/jpeg' },
                        caption: message,
                        thumbnail: thumbnailBuffer
                    },
                    {
                        quoted: M,
                    }
                );

                return;
            }

            const command = client.cmd.get(arg) || client.cmd.find((cmd) => cmd.aliases && cmd.aliases.includes(arg));

            if (!command) return M.reply('Command not found');

            const message = `*CMD INFO*\n\n*𒉽 Name:* ${command.name}\n*𒉽 Aliases:* ${command.aliases.join(', ')}\n*𒉽 Desc:* ${command.description}`;

            M.reply(message);
        } catch (err) {
            await client.sendMessage(M.from, { image: { url: `${client.utils.errorChan()}` }, caption: `${greeting} Error frost\n\nError:\n${err}` });
        }
    }
};
