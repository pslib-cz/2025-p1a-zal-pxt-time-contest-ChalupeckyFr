/*  TimeContest  */

enum GameState {
    Passive,   // čekání – hráč může zobrazit skóre nebo spustit hru
    Started,   // přehrávání intervalu – zobrazeny přesýpací hodiny
    Running    // hráč odhaduje – zobrazuje se otazník, měří se čas
}

let state: GameState = GameState.Passive
let targetInterval: number = 0   // sekundy (5–15)
let startTime: number = 0        // ms – základ pro měření
let score: number = 0

let bothButtonsPressed:boolean = false
let cas:number = 0

input.onButtonPressed(Button.AB, function() {
    bothButtonsPressed = true
})

let casPredZapnutim = input.runningTime()

basic.forever(function(){
    if (bothButtonsPressed) {
        cas = randint(5, 15)
        state = GameState.Started
        basic.showIcon(IconNames.Pitchfork)
        for (let i = 0; i < 3; i++) {
        music.playTone(Note.G, 500)
        basic.pause(500)
        }
        music.playTone(Note.C5, 500)
        bothButtonsPressed = false
    }
})