import { IGameData } from '../types/game-data'

export const gameList: IGameData[] = [
  {
    images: [{ link: 'portfolio/SpheraTurris.png', type: 'main' }],
    title: 'Sphera Turris',
    description: `Sphera Turris is a rotating platformer where you guide a ball past an array of increasingly difficult obstacles to the top of a tower. Precision controls, environmental physics, and challenging levels will have you trying over-and-over to shave a few tenths of a second off your best times. The custom music I created goes great with the colorful, futuristic graphics. Download it now and start comparing speed run times and tips with your friends.`,
    shortDescription: 'Released on Steam!',
    name: 'SpheraTurris',
    playLink: { link: 'https://store.steampowered.com/app/805350/Sphera_Turris/', type: 'external' }
  },
  {
    images: [{ link: 'portfolio/Invaders.jpg', type: 'main' }],
    title: 'Invaders',
    description: `A Galaga like arcade game.`,
    name: 'Invaders',
    playLink: { link: 'Invaders', type: 'local' },
    github: 'https://github.com/mwiedmann/invaders'
  },
  {
    images: [{ link: 'portfolio/SpaceHarvest.jpg', type: 'main' }],
    title: 'Space Harvest',
    description: `Up to 4 players battle to collect minerals and protect their bases in this Asteroids type game.`,
    name: 'SpaceHarvest',
    playLink: { link: 'SpaceHarvest', type: 'local' },
    github: 'https://github.com/mwiedmann/space-harvest'
  },
  {
    images: [{ link: 'portfolio/BattleBall.png', type: 'main' }],
    title: 'Battle Ball',
    description: `Hit the ice in this fast paced, heavy hitting hockey like game.`,
    name: 'BattleBall',
    playLink: { link: 'BattleBall', type: 'local' },
    github: 'https://github.com/mwiedmann/battle-ball'
  },
  {
    images: [{ link: 'portfolio/Waterfall.png', type: 'main' }],
    title: 'Waterfall',
    description: `This is more of a simulation rather than a game, but it's very satifying to watch the "water" crash into the statue and wash away.`,
    name: 'Waterfall',
    playLink: { link: 'Waterfall', type: 'local' }
  },
  {
    images: [{ link: 'portfolio/Gobblers.jpg', type: 'main' }],
    title: 'Gobblers',
    description: `Early prototype for a new local multiplayer game I'm working on. Players move "gobblers" around the outside of an arena and capture balls that roll out. Grab bonus balls for extra points and power-ups. Avoid the death balls to stay in the action. Skilled players can jump and warp their Gobblers around the arena. Play solo or with friends and AI players.`,
    name: 'Gobblers',
    playLink: { link: 'Gobblers', type: 'local' }
  },
  {
    images: [{ link: 'portfolio/Grapher.png', type: 'main' }],
    title: 'Grapher',
    description: `A prototype of a Unity function grapher. Build equations and see how the graph changes.`,
    name: 'Grapher',
    playLink: { link: 'Grapher', type: 'local' }
  },
  {
    images: [{ link: 'portfolio/Scratch.png', type: 'main' }],
    title: 'Scratch Programming',
    description: `One thing I love about programming is teaching it to others. Scratch is a visual programming language developed by the Lifelong Kindergarten group at the MIT Media Lab. It's a great tool for learning programming. It may be geared towards kids but honestly any age can benefit from Scratch. It's very easy to create some surprisingly cool projects. I've taught several Scratch courses for middle-schoolers and still visit the site daily to answer questions and see what's new in the world of Scratch. Check out my projects there for a sample of what you can do.`,
    name: 'Scratch',
    playLink: { link: 'https://scratch.mit.edu/projects/10771102/', type: 'external' }
  }
]
