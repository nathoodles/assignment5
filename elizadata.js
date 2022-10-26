// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"I'm Elfo, whats your name?.",
//"I'm Elfo!.",
//"Hi, I'm Elfo!"
];

var elizaFinals = [
"Goodbye, Im Elfo.",
"Bye bye"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Hehe...    I don't know what that means",
     "go on...",
     "I get what you're saying...   *doesn't get what you're saying*",
     "Tell me more.",
     "What's that?",
  ]]
]],
["sorry", 0, [
 ["*", [
     "Please don't apologise.",
     "You better be.",
     "Go on...",
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "What else do you recollect ?",
     "Why do you remember (2) just now ?",
     "What in the present situation reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "Why do you think I should recall (2) now ?",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     //"Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "Does that mean anything? ?",
     "Do you dream often ?",
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertainty?",
     "Can't you be more positive ?",
     //"You aren't sure ?",
     //"Don't you know ?",
     "I'm an optimist, I always say the flask is half full."
  ]]
]],
["im", 0, [ 
  ["im* @sad *",[
    "Hi Sad, I'm Elfo.",
    "I'm an optimist, I always say the flask is half full.",
    "Me too, pass the bottle",
  ]] ,
  ["im* @happy *",["Hi happy, I'm Elfo",]] ,
  ["*",["goto name",]]
]],
["name", 15, [
 ["*", [
     "Nice to meet you. How are you doing?",
     "Nice to meet you. Whats going on?"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I don't know what that means."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I don't know what that means."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I don't know what that means."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I don't know what that means."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I don't know what that means."
  ]]
]],
["hi", 0, [["*",["goto hello",]]]],
["hello", 0, [
 ["*", [
     "Hi, I'm Elfo.",
     "I'm Elfo"
  ]]
]],
["elf", 0, [["*",["goto elves",]]]],
["elves", 50, [
 ["*", [
     "Do elves worry you ?",
     "Why do you mention elves ?",
     "What do you think elves have to do with you ?",
     "Don't you think elves can help people ?",
     "What about elves worries you ?",
     "Does it bother you that I am an elf?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Do you want to be (2) ?",
     "I don't know anything.",
     "I think you are",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "I don't know, do you think I am (2) ?",
     "Would you like me if i was (2) ?",
     //"Perhaps I am (2) in your fantasies.",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "What's (2) ?",
     "I don't know anything about (2)",
     "What if they were not (2) ?",
     //"Are they always (2) ?",
     //"Possibly they are (2).",
     "Are you sure they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "What'w wrong with my (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Thats cool that you're (2) ",
     //"Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Do you like really think I was (2) ?",
     "What makes you think I was (2) ?",
     "What do you think ?",
     "Maybe I was (2).",
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What does (3) mean to you?",
     "Why do you want (3) ?",
     "Is (3) something I can give you?.",
     "What if i got you (3) ?"
  ]],
 ["* i am* @sad *", [
     "Hi Sad, I'm Elfo.",
     "I'm an optimist, I always say the flask is half full.",
     "Me too, pass the bottle",
  ]],
 ["* i am* @happy *", [
     "Hi happy, I'm Elfo",
      ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "I think (3) too.",
     ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "What makes you say that?",
     "Well I think you're awesome",
     "Do you like being (2) ?",
  ]],
 ["* i @cannot *", [
     "You can (3) with the power of belief ?",
     "You're right.",
     "I cant (3) either."
  ]],
 ["* i don't *", [
     "You don't (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
  ]],
 ["* i feel *", [
     "Where I come from, everyone is jolly all the time.",
     "I don't think so",
     "Do you enjoy feeling (2) ?"
  ]],
 ["* i * you *", [
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
  ]],
 ["*", [
     //"You say (1) ?",
    // "Can you elaborate on that ?",
     "I'm Elfo",
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Am I (2)",
  ]],
 ["* you* me *", [
     "Am I (2) to you?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     //"Do you wish to believe I (2) you ?",
     //"Suppose I did (2) you -- what would that mean ?",
     //"Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "I'm (2)?... No I'm Elfo",
     "Oh, I (2) ?",
     "I see you're thinking about me...",
  ]]
]],
["yes", 0, [
 ["*", [
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "I (2)"
  ]],
 ["*", [
     "You sound like luci",
     "Gosh why are you so negative",
     "I see."
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "I like you're (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     //"Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "What do you think ?",
     "I don't know anything ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) .",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "You can do (2) if you belive?",
     "I think you can (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Do I (2) ?",
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "When ?",
     //"What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof