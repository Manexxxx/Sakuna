const axios = require('axios')

module.exports = {
    name: 'repo',
    aliases: ['repo'],
    category: 'general',
    react: "✅",
    usage: '',
    description: 'Downloads given YouTube Video and sends it as Audio',
    async execute(client, arg, M) {

         const thumbnailUrls = [
    'https://telegra.ph/file/0c58fa362d3adb78a6b07.jpg',
    'https://telegra.ph/file/4e582dfee9a0822569ed4.jpg',
    'https://telegra.ph/file/de38fa35fef966ba0edb5.jpg',
    'https://telegra.ph/file/b4208af383e195cccdf15.jpg',
    'https://telegra.ph/file/d64030b82e94d9082229d.jpg',
];

function getRandomThumbnailUrl() {
    const randomIndex = Math.floor(Math.random() * thumbnailUrls.length);
    return thumbnailUrls[randomIndex];
}
  const thumbnailUrl = getRandomThumbnailUrl()

try {
                let repoInfo = await axios.get('https://api.github.com/repos/Push-b/kurumi_bot')
                if (!repoInfo) {
                    return M.reply('Failed to fetch repo information.');
                }
                let repo = repoInfo.data
                let txt = `🧣 *Kurumi Script* 🧣\n\n*🎀 Total Forks:* ${repo.forks}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license.name}\n*📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${repo.html_url}\n\n❝ Dont forget to give a Star ⭐ to the repo.`
      
     await client.sendMessage(M.from, { image : { url : thumbnailUrl} , caption: txt , gifPlayback: true} , {quoted: M})
      }catch(err){
    await client.sendMessage(M.from , {image: {url: `${client.utils.errorChan()}`} , caption: `${client.utils.greetings()} Error-Chan Dis\n\nError:\n${err}`})
  }
          
    }
}
