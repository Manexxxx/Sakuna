module.exports = {
    name: 'delete',
    aliases: ['del'],
    category: 'general',
    react: "✅",
    description: 'Deletes the quoted message',
    async execute(client, arg, M) {
        
        if (!M.quoted) return M.reply('ooh hunny quote the message that you want me to delete for you.')
        await client.sendMessage(M.from, {
            delete: M.quoted.key
        })
    }
}
