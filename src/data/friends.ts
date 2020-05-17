import { IFriendData } from '../types/friend-data'

export const friendList: IFriendData[] = [
  {
    name: 'LearningLab360',
    images: [{ link: 'friends/learninglab360.jpg', type: 'main' }],
    title: 'Learning Lab 360',
    description: `Learning Lab 360 is a traveling VR studio geared towards students. It was started by a co-worker of mine Chris Habbershaw. Chris is a great coder and fellow Unity enthusiast. He has created many of the VR programs that the students use. It's a fantastic experience.`,
    shortDescription: 'A Virtual Reality learning center for students created by a co-worker of mine Chris Habbershaw',
    siteLink: { link: 'http://learninglab360.com/', type: 'external' }
  },
  {
    name: 'RogerLinville',
    images: [{ link: 'friends/roger-linville.png', type: 'main' }],
    title: 'Roger Linville',
    description: `I met Roger at my current job. He's an excellent coder and has a knack for creating cool games. Check out his site and see if you can make the high score list.`,
    shortDescription: 'Fellow programmer, co-worker, and game maker',
    siteLink: { link: 'http://rlinville.azurewebsites.net/', type: 'external' }
  }
]
