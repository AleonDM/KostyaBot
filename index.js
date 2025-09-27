require('dotenv').config()
const { Bot } = require('grammy')
const process = require('process')


const KEY = process.env.TOKEN
const bot = new Bot(KEY)

let kostya = 0
let dimas = 0
let dimazh = 0
let zhuravl = 0
let katya = 0
let sveta = 0
let david = 0

bot.command("start", (ctx) => {
    ctx.reply('OK3');
});

bot.command("char", (ctx) => {
    try {
        ctx.reply(`Костя: ${kostya}\nДавид: ${david}\nДима Смирнов: ${dimas}\nДима Жуков: ${dimazh}\nДима Журавлев: ${zhuravl}\nКатя: ${katya}\nСвета: ${sveta}`)
    } catch (error) {
        ctx.reply(error)
    }
    
})

bot.on('message:text', async (ctx) => {
    const messageText = ctx.message.text.toLowerCase().trim();
    try{
        if (messageText.includes('кост') || messageText.includes('константин')) {
            let mass = [
                'крутой пацан', 
                'Константин — отличный парень!\nДаже круче чем Бред Пит\nПосле секса отвернется,\nИ тихонечко храпит.',
                "Костя - это не имя, это уровень влияния",
                "Когда Костя входит в комнату, успех приходит вместе с ним",
                "Костя решает вопросы, пока другие ищут проблемы",
                "У Косты есть два режима: 'все схвачено' и 'будет сделано'",
                "Костя не ждет возможности - он их создает",
                "Если Костя взялся за дело, считай оно уже в шляпе",
                "Костя: выглядит стильно, действует решительно",
                "Просто Костя - звучит как 'просто чемпион'",
                "Когда Костя говорит 'решим', вселенная подстраивается",
                "Костя - ходячее доказательство того, что харизма правит миром",
                "У Косты планы на вечность, и он уже опаздывает",
                "Костя не поднимает планку - он рождается над ней",
                "Константин, дорогой", 
                "Константин, дорогой,\nЛицо твоё зеленое\nТы заканчивал бы пить\nБухло это палёное"
            ]
            let rand = Math.floor(Math.random()*15)+1
            await ctx.reply(mass[rand]);
        }
    } catch (err) {
        await ctx.reply('вышшла ошибочка', err)
    }
    try {

        if (messageText.includes('кост') || messageText.includes('константин') || messageText.includes('@g4LowSh1k')) {
            kostya++
        } 
        if (messageText.includes('смирнов') || messageText.includes('@aleondm')) {
            dimas++
        }
        if (messageText.includes('жуков') || messageText.includes('@D3LVlN')) {
            dimazh++
        }
        if (messageText.includes('журавлев') || messageText.includes('@web3_developer')) {
            zhuravl++
        }
        if (messageText.includes('кат') || messageText.includes('екатерин') || messageText.includes('@Gnom492')) {
            katya++
        }
        if (messageText.includes('свет') || messageText.includes('@tsvft')) {
            sveta++
        }
        if (messageText.includes('давид') || messageText.includes('@deirozz')) {
            david++
        }
    } catch (error) {
        await ctx.reply(error)
    }

});

bot.start()